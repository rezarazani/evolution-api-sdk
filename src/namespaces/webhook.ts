import { HttpClient } from '../utils';
import {
    WebhookSetRequest,
    WebhookSetResponse,
    WebhookFindResponse,
} from '../types';

export class WebhookNamespace {
    constructor(private readonly http: HttpClient) {}

    async set(
        instanceName: string,
        data: WebhookSetRequest
    ): Promise<WebhookSetResponse> {
        const response = await this.http.post<WebhookSetResponse>(
            `/webhook/set/${instanceName}`,
            data
        );
        return response.data;
    }

    async find(instanceName: string): Promise<WebhookFindResponse> {
        const response = await this.http.get<WebhookFindResponse>(
            `/webhook/find/${instanceName}`
        );
        return response.data;
    }
}
