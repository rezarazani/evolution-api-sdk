export interface HttpClient {
    get<T = unknown>(
        url: string,
        config?: RequestConfig
    ): Promise<HttpResponse<T>>;
    post<T = unknown>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<HttpResponse<T>>;
    put<T = unknown>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<HttpResponse<T>>;
    delete<T = unknown>(
        url: string,
        config?: RequestConfig
    ): Promise<HttpResponse<T>>;
    defaults: {
        baseURL: string;
        headers: Record<string, string>;
    };
}

export interface RequestConfig {
    params?: Record<string, unknown>;
    headers?: Record<string, string>;
}

export interface HttpResponse<T = unknown> {
    data: T;
    status: number;
    statusText: string;
}

export class EvolutionApiError extends Error {
    constructor(
        public status: number,
        public statusText: string,
        public response?: unknown,
        message?: string
    ) {
        super(message ?? statusText);
        this.name = 'evolutionApiError';
    }
}



export class FetchHttpClient implements HttpClient {
    public defaults: {
        baseURL: string;
        headers: Record<string, string>;
    };

    constructor(
        baseURL: string,
        headers: Record<string, string>,
        private readonly timeout: number = 30000
    ) {
        this.defaults = { baseURL, headers };
    }

    private async makeRequest<T>(
        url: string,
        options: RequestInit = {}
    ): Promise<HttpResponse<T>> {
        const fullUrl = url.startsWith('http')
            ? url
            : `${this.defaults.baseURL}${url}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await this.performFetch(
                fullUrl,
                options,
                controller
            );
            clearTimeout(timeoutId);
            const data = await this.parseResponse<T>(response);

            if (!response.ok) {
                throw this.createErrorFromResponse(response, data);
            }

            return {
                data,
                status: response.status,
                statusText: response.statusText,
            };
        } catch (error: unknown) {
            clearTimeout(timeoutId);
            return this.handleRequestError(error);
        }
    }

    private async performFetch(
        url: string,
        options: RequestInit,
        controller: AbortController
    ): Promise<Response> {
        return fetch(url, {
            ...options,
            headers: { ...this.defaults.headers, ...options.headers },
            signal: controller.signal,
        });
    }

    private async parseResponse<T>(response: Response): Promise<T> {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            return response.json() as Promise<T>;
        }
        return response.text() as unknown as T;
    }

    private createErrorFromResponse<T>(
        response: Response,
        data: T
    ): EvolutionApiError {
        const errorMessage = this.extractErrorMessage(
            data,
            response.statusText
        );
        return new EvolutionApiError(
            response.status,
            response.statusText,
            data,
            errorMessage
        );
    }

    private extractErrorMessage<T>(data: T, fallback: string): string {
        if (typeof data === 'string') return data;
        if (data && typeof data === 'object') {
            const errorData = data as Record<string, unknown>;
            return (
                (typeof errorData.message === 'string'
                    ? errorData.message
                    : '') ||
                (typeof errorData.error === 'string' ? errorData.error : '') ||
                fallback
            );
        }
        return fallback;
    }

    private handleRequestError(error: unknown): never {
        if (error instanceof EvolutionApiError) throw error;
        if (error instanceof Error && error.name === 'AbortError') {
            throw new EvolutionApiError(
                0,
                'Request timeout',
                null,
                'Request timed out'
            );
        }
        throw new EvolutionApiError(
            0,
            'Network error',
            null,
            error instanceof Error ? error.message : 'Unknown error'
        );
    }

    async get<T = unknown>(
        url: string,
        config?: RequestConfig
    ): Promise<HttpResponse<T>> {
        let fullUrl = url;
        if (config?.params) {
            const searchParams = new URLSearchParams();
            Object.entries(config.params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    const stringValue =
                        typeof value === 'string'
                            ? value
                            : JSON.stringify(value);
                    searchParams.append(key, stringValue);
                }
            });
            fullUrl += `?${searchParams.toString()}`;
        }

        return this.makeRequest<T>(fullUrl, {
            method: 'GET',
            headers: config?.headers,
        });
    }

    async post<T = unknown>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<HttpResponse<T>> {
        return this.makeRequest<T>(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...config?.headers,
            },
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async put<T = unknown>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<HttpResponse<T>> {
        return this.makeRequest<T>(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...config?.headers,
            },
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async delete<T = unknown>(
        url: string,
        config?: RequestConfig
    ): Promise<HttpResponse<T>> {
        return this.makeRequest<T>(url, {
            method: 'DELETE',
            headers: config?.headers,
        });
    }
}
