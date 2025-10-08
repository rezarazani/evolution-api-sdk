import { InfoNamespace } from './namespaces/info';
import { InstancesNamespace } from './namespaces/instances';
import { WebhookNamespace } from './namespaces/webhook';
import { SettingsNamespace } from './namespaces/settings';
import { MessageNamespace } from './namespaces/message';

import { FetchHttpClient, HttpClient } from './utils';

export interface EvolutionApiClientConfig {
    baseUrl: string;
    apiKey: string;
    timeout?: number;
}

export class EvolutionClient {
    private readonly http: HttpClient;

    // Organized namespaces
    public readonly info: InfoNamespace;
    public readonly instance: InstancesNamespace;
    public readonly webhook: WebhookNamespace;
    public readonly setting: SettingsNamespace;
    public readonly message: MessageNamespace;

    constructor(config: EvolutionApiClientConfig) {
        // Create fetch-based http client with configuration
        this.http = new FetchHttpClient(
            config.baseUrl.replace(/\/$/, ''),
            {
                'Content-Type': 'application/json',
                apikey: config.apiKey,
            },
            config.timeout ?? 30000
        );

        // Initialize namespaces
        this.info = new InfoNamespace(this.http);
        this.instance = new InstancesNamespace(this.http);
        this.webhook = new WebhookNamespace(this.http);
        this.setting = new SettingsNamespace(this.http);
        this.message = new MessageNamespace(this.http);
    }

    // Utility method to get raw http client if needed
    public getHttpClient(): HttpClient {
        return this.http;
    }

    // Method to update API key
    public updateApiKey(apiKey: string): void {
        this.http.defaults.headers['apikey'] = apiKey;
    }

    // Method to update base URL
    public updateBaseUrl(baseUrl: string): void {
        this.http.defaults.baseURL = baseUrl.replace(/\/$/, '');
    }
}
