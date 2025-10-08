import { HttpClient } from '../utils';
import { GetInformationResponse } from '../types';

export class InfoNamespace {
    constructor(private readonly http: HttpClient) {}

    async getInfo(): Promise<GetInformationResponse> {
        const response = await this.http.get<GetInformationResponse>(`/`, {});
        return response.data;
    }
}
