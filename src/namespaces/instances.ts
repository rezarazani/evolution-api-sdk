import { HttpClient } from '../utils';
import {
    InstanceConnectResponse,
    InstanceCreateRequest,
    InstanceCreateResponse,
    InstanceDeleteResponse,
    InstanceFetchRequest,
    InstanceFetchResponse,
    InstanceLogoutResponse,
    InstanceRestartResponse,
    InstanceStateResponse,
} from '../types';

export class InstancesNamespace {
    constructor(private readonly http: HttpClient) {}

    async create(data: InstanceCreateRequest): Promise<InstanceCreateResponse> {
        const response = await this.http.post<InstanceCreateResponse>(
            `/instance/create`,
            data
        );
        return response.data;
    }

    async fetch(data: InstanceFetchRequest): Promise<InstanceFetchResponse[]> {
        const response = await this.http.get<InstanceFetchResponse[]>(
            `/instance/fetchInstances`,
            {
                params: data as Record<string, string>,
            }
        );

        return response.data;
    }

    async connect(
        instanceName: string,
        number?: string
    ): Promise<InstanceConnectResponse> {
        const response = await this.http.get<InstanceConnectResponse>(
            `/instance/connect/${instanceName}`,
            {
                params: { number },
            }
        );
        return response.data;
    }

    async restart(instanceName: string): Promise<InstanceRestartResponse> {
        const response = await this.http.get<InstanceRestartResponse>(
            `/instance/restart/${instanceName}`
        );
        return response.data;
    }

    async connectionState(
        instanceName: string
    ): Promise<InstanceStateResponse> {
        const response = await this.http.get<InstanceStateResponse>(
            `/instance/connectionState/${instanceName}`
        );
        return response.data;
    }

    async logout(instanceName: string): Promise<InstanceLogoutResponse> {
        const response = await this.http.delete<InstanceLogoutResponse>(
            `/instance/logout/${instanceName}`
        );
        return response.data;
    }

    async delete(instanceName: string): Promise<InstanceDeleteResponse> {
        const response = await this.http.delete<InstanceDeleteResponse>(
            `/instance/delete/${instanceName}`
        );
        return response.data;
    }

    async setPresence(
        instanceName: string,
        presence: 'available' | 'unavailable'
    ): Promise<any> {
        const response = await this.http.post(
            `/instance/setPresence/${instanceName}`,
            { presence }
        );
        return response.data;
    }
}
