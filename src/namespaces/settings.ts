import { HttpClient } from '../utils';
import { 
    SettingSetRequest,
    SettingSetResponse,
    WebhookFindResponse
} from '../types';

export class SettingsNamespace {
    constructor(private readonly http: HttpClient) { }


    async set(instanceName: string , data: SettingSetRequest): Promise<SettingSetResponse> {
        const response = await this.http.post<SettingSetResponse>(`/settings/set/${instanceName}`, data);
        return response.data;
    }

    async find(instanceName: string): Promise<WebhookFindResponse> {
        const response = await this.http.get<WebhookFindResponse>(`/settings/find/${instanceName}`);
        return response.data;
    }



}
