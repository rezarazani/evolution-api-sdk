import { HttpClient } from '../utils';
import { 
    SendTextRequest,
    SendTextResponse,
    SendStatusRequest,
    SendStatusResponse,
    SendMediaRequest,
    SendMediaResponse,
    SendAudioRequest,
    SendAudioResponse,
    SendStickerRequest,
    SendStickerResponse,
    SendLocationRequest,
    SendLocationResponse,
    SendContactRequest,
    SendContactResponse,
    SendReactionRequest,
    SendReactionResponse,
    SendPollRequest,
    SendPollResponse,
    SendListRequest,
    SendListResponse,
    SendButtonsRequest,
    SendButtonsResponse,
} from '../types';

export class MessageNamespace {
    constructor(private readonly http: HttpClient) { }

    /**
     * Send a plain text message
     */
    async sendText(instanceName: string, data: SendTextRequest): Promise<SendTextResponse> {
        const response = await this.http.post<SendTextResponse>(`/message/sendText/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a status message
     */
    async sendStatus(instanceName: string, data: SendStatusRequest): Promise<SendStatusResponse> {
        const response = await this.http.post<SendStatusResponse>(`/message/sendStatus/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a media message (image, video, document)
     */
    async sendMedia(instanceName: string, data: SendMediaRequest): Promise<SendMediaResponse> {
        const response = await this.http.post<SendMediaResponse>(`/message/sendMedia/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send an audio message
     */
    async sendAudio(instanceName: string, data: SendAudioRequest): Promise<SendAudioResponse> {
        const response = await this.http.post<SendAudioResponse>(`/message/sendWhatsAppAudio/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a sticker message
     */
    async sendSticker(instanceName: string, data: SendStickerRequest): Promise<SendStickerResponse> {
        const response = await this.http.post<SendStickerResponse>(`/message/sendSticker/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a location message
     */
    async sendLocation(instanceName: string, data: SendLocationRequest): Promise<SendLocationResponse> {
        const response = await this.http.post<SendLocationResponse>(`/message/sendLocation/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a contact message
     */
    async sendContact(instanceName: string, data: SendContactRequest): Promise<SendContactResponse> {
        const response = await this.http.post<SendContactResponse>(`/message/sendContact/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a reaction message
     */
    async sendReaction(instanceName: string, data: SendReactionRequest): Promise<SendReactionResponse> {
        const response = await this.http.post<SendReactionResponse>(`/message/sendReaction/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a poll message
     */
    async sendPoll(instanceName: string, data: SendPollRequest): Promise<SendPollResponse> {
        const response = await this.http.post<SendPollResponse>(`/message/sendPoll/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a list message
     */
    async sendList(instanceName: string, data: SendListRequest): Promise<SendListResponse> {
        const response = await this.http.post<SendListResponse>(`/message/sendList/${instanceName}`, data);
        return response.data;
    }

    /**
     * Send a buttons message
     */
    async sendButtons(instanceName: string, data: SendButtonsRequest): Promise<SendButtonsResponse> {
        const response = await this.http.post<SendButtonsResponse>(`/message/sendButtons/${instanceName}`, data);
        return response.data;
    }
}