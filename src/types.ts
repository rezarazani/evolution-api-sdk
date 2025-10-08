import { Instance, Setting } from './model';

export type WebhookEvent =
    | 'APPLICATION_STARTUP'
    | 'QRCODE_UPDATED'
    | 'MESSAGES_SET'
    | 'MESSAGES_UPSERT'
    | 'MESSAGES_UPDATE'
    | 'MESSAGES_DELETE'
    | 'SEND_MESSAGE'
    | 'CONTACTS_SET'
    | 'CONTACTS_UPSERT'
    | 'CONTACTS_UPDATE'
    | 'PRESENCE_UPDATE'
    | 'CHATS_SET'
    | 'CHATS_UPSERT'
    | 'CHATS_UPDATE'
    | 'CHATS_DELETE'
    | 'GROUPS_UPSERT'
    | 'GROUP_UPDATE'
    | 'GROUP_PARTICIPANTS_UPDATE'
    | 'CONNECTION_UPDATE'
    | 'CALL'
    | 'NEW_JWT_TOKEN'
    | 'TYPEBOT_START'
    | 'TYPEBOT_CHANGE_STATUS';

export type RabbitMQEvents =
    | 'APPLICATION_STARTUP'
    | 'QRCODE_UPDATED'
    | 'MESSAGES_SET'
    | 'MESSAGES_UPSERT'
    | 'MESSAGES_UPDATE'
    | 'MESSAGES_DELETE'
    | 'SEND_MESSAGE'
    | 'CONTACTS_SET'
    | 'CONTACTS_UPSERT'
    | 'CONTACTS_UPDATE'
    | 'PRESENCE_UPDATE'
    | 'CHATS_SET'
    | 'CHATS_UPSERT'
    | 'CHATS_UPDATE'
    | 'CHATS_DELETE'
    | 'GROUPS_UPSERT'
    | 'GROUP_UPDATE'
    | 'GROUP_PARTICIPANTS_UPDATE'
    | 'CONNECTION_UPDATE'
    | 'LABELS_EDIT'
    | 'LABELS_ASSOCIATION'
    | 'CALL'
    | 'TYPEBOT_START'
    | 'TYPEBOT_CHANGE_STATUS';

export type SQSEvent =
    | 'APPLICATION_STARTUP'
    | 'QRCODE_UPDATED'
    | 'MESSAGES_SET'
    | 'MESSAGES_UPSERT'
    | 'MESSAGES_UPDATE'
    | 'MESSAGES_DELETE'
    | 'SEND_MESSAGE'
    | 'CONTACTS_SET'
    | 'CONTACTS_UPSERT'
    | 'CONTACTS_UPDATE'
    | 'PRESENCE_UPDATE'
    | 'CHATS_SET'
    | 'CHATS_UPSERT'
    | 'CHATS_UPDATE'
    | 'CHATS_DELETE'
    | 'GROUPS_UPSERT'
    | 'GROUP_UPDATE'
    | 'GROUP_PARTICIPANTS_UPDATE'
    | 'CONNECTION_UPDATE'
    | 'CALL'
    | 'NEW_JWT_TOKEN'
    | 'TYPEBOT_START'
    | 'TYPEBOT_CHANGE_STATUS';

export interface GetInformationResponse {
    status: number;
    message: string;
    version: string;
    swagger: string;
    manager: string;
    documentation: string;
}

export interface InstanceCreateRequest {
    instanceName: string;
    integration: 'WHATSAPP-BAILEYS' | 'WHATSAPP-BUSINESS';
    token?: string;
    qrcode?: boolean;
    number?: string;
    rejectCall?: boolean;
    msgCall?: string;
    groupsIgnore?: boolean;
    alwaysOnline?: boolean;
    readMessages?: boolean;
    readStatus?: boolean;
    syncFullHistory?: boolean;
    proxyHost?: string;
    proxyPort?: string;
    proxyProtocol?: string;
    proxyUsername?: string;
    proxyPassword?: string;
    webhook?: {
        url: string;
        byEvents?: boolean;
        base64?: boolean;
        headers?: Record<string, string>;
        events?: WebhookEvent[];
    };
    rabbitmq?: {
        enabled: boolean;
        events?: RabbitMQEvents[];
    };
    sqs?: {
        enabled: boolean;
        events?: SQSEvent[];
    };
    chatwootAccountId?: number;
    chatwootToken?: string;
    chatwootUrl?: string;
    chatwootSignMsg?: boolean;
    chatwootReopenConversation?: boolean;
    chatwootConversationPending?: boolean;
    chatwootImportContacts?: boolean;
    chatwootNameInbox?: string;
    chatwootMergeBrazilContacts?: boolean;
    chatwootImportMessages?: boolean;
    chatwootDaysLimitImportMessages?: number;
    chatwootOrganization?: string;
    chatwootLogo?: string;
}

export interface InstanceCreateResponse {
    instance: {
        instanceName: string;
        instanceId: any;
        integration: string;
        webhookWaBusiness: any;
        accessTokenWaBusiness: string;
        status: any;
    };
    hash: string;
    webhook: {
        webhookUrl: string;
        webhookHeaders: Record<string, string>;
        webhookByEvents: boolean;
        webhookBase64: boolean;
    };
    websocket: {
        enabled: boolean;
    };
    rabbitmq: {
        enabled: boolean;
    };
    nats: {
        enabled: boolean;
    };
    sqs: {
        enabled: boolean;
    };
    settings: {
        rejectCall?: boolean;
        msgCall?: string;
        groupsIgnore?: boolean;
        alwaysOnline?: boolean;
        readMessages?: boolean;
        readStatus?: boolean;
        syncFullHistory?: boolean;
        wavoipToken?: string;
    };
    qrcode: {
        count?: number;
        pairingCode?: string;
        base64?: string;
        code?: string;
    };
}

export interface InstanceFetchRequest {
    instanceName?: string;
    instanceId?: string;
}

export interface InstanceFetchResponse {
    id: Instance['id'];
    name: Instance['name'];
    connectionStatus: Instance['connectionStatus'];
    ownerJid: Instance['ownerJid'];
    profileName: Instance['profileName'];
    profilePicUrl: Instance['profilePicUrl'];
    integration: Instance['integration'];
    number: Instance['number'];
    businessId: Instance['businessId'];
    token: Instance['token'];
    clientName: Instance['clientName'];
    disconnectionReasonCode: Instance['disconnectionReasonCode'];
    disconnectionObject: Instance['disconnectionObject'];
    disconnectionAt: Instance['disconnectionAt'];
    createdAt: string;
    updatedAt: string;
    Chatwoot: Instance['Chatwoot'];
    Proxy: Instance['Proxy'];
    Rabbitmq: Instance['Rabbitmq'];
    Nats: Instance['Nats'];
    Sqs: Instance['Sqs'];
    Websocket: Instance['Websocket'];
    Setting: Omit<Setting, 'Instance'>;
    _count: {
        Message: number;
        Contact: number;
        Chat: number;
    };
}

interface QrCode {
    pairingCode: string | null;
    code: string;
    base64: string;
    count: number;
}

interface InstanceState {
    instance: {
        instanceName: string;
        state: string;
    };
}

export type InstanceConnectResponse = QrCode | InstanceState;

export type InstanceRestartResponse = InstanceState;

export type InstanceStateResponse = InstanceState;

export interface InstanceLogoutResponse {
    status: 'SUCCESS';
    error: false;
    response: {
        message: 'Instance logged out';
    };
}

export interface InstanceDeleteResponse {
    status: 'SUCCESS';
    error: false;
    response: {
        message: 'Instance logged out';
    };
}

export interface WebhookSetRequest {
    enabled: boolean;
    url: string;
    webhookByEvents: boolean;
    webhookBase64: boolean;
    events: WebhookEvent[];
}

export interface WebhookSetResponse {
    webhook: {
        instanceName: string;
        webhook: {
            url: string;
            events: WebhookEvent[];
            enabled: boolean;
        };
    };
}

export interface WebhookFindResponse {
    enabled: boolean;
    url: string;
    events: WebhookEvent[];
}

export interface SettingSetRequest {
    rejectCall: boolean;
    msgCall: string;
    groupsIgnore: boolean;
    alwaysOnline: boolean;
    readMessages: boolean;
    readStatus: boolean;
    syncFullHistory: boolean;
}

export interface SettingSetResponse {
    settings: {
        instanceName: string;
        settings: {
            rejectCall: boolean;
            msgCall: string;
            groupsIgnore: boolean;
            alwaysOnline: boolean;
            readMessages: boolean;
            readStatus: boolean;
            syncFullHistory: boolean;
        };
    };
}

export interface SettingFindResponse {
    rejectCall: boolean;
    msgCall: string;
    groupsIgnore: boolean;
    alwaysOnline: boolean;
    readMessages: boolean;
    readStatus: boolean;
    syncFullHistory: boolean;
    wavoipToken: string;
}

// Message Controller Types
export interface MessageKey {
    remoteJid: string;
    fromMe: boolean;
    id: string;
}

export interface ImageMessage {
    url: string;
    mimetype: string;
    caption: string;
    fileSha256: string;
    fileLength: string;
    height: number;
    width: number;
    mediaKey: string;
    fileEncSha256: string;
    directPath: string;
    mediaKeyTimestamp: string;
    jpegThumbnail: string;
    contextInfo: any;
}

export interface AudioMessage {
    url: string;
    mimetype: string;
    fileSha256: string;
    fileLength: string;
    seconds: number;
    ptt: boolean;
    mediaKey: string;
    fileEncSha256: string;
    directPath: string;
    mediaKeyTimestamp: string;
}

export interface LocationMessage {
    degreesLatitude: number;
    degreesLongitude: number;
    name: string;
    address: string;
    contextInfo: any;
}

export interface ContactMessage {
    displayName: string;
    vcard: string;
    contextInfo: any;
}

export interface ReactionMessage {
    key: {
        remoteJid: string;
        fromMe: boolean;
        id: string;
    };
    text: string;
    senderTimestampMs: string;
}

export interface PollCreationMessage {
    name: string;
    options: {
        optionName: string;
    }[];
    selectableOptionsCount: number;
}

export interface MessageContent {
    conversation?: string;
    extendedTextMessage?: {
        text: string;
        backgroundArgb?: number;
        font?: string;
    };
    imageMessage?: ImageMessage;
    videoMessage?: any;
    audioMessage?: AudioMessage;
    documentMessage?: any;
    stickerMessage?: any;
    locationMessage?: LocationMessage;
    contactMessage?: ContactMessage;
    reactionMessage?: ReactionMessage;
    pollCreationMessage?: PollCreationMessage;
    listMessage?: any;
    buttonsMessage?: any;
    statusMessage?: any;
}

export interface QuotedMessage {
    key: {
        id: string;
    };
    message: {
        conversation: string;
    };
}

export interface MessageResponse {
    key: MessageKey;
    message: MessageContent;
    messageTimestamp: string;
    status: string;
}

export interface MessageMetadata {
    number: string;
    delay?: number;
    quoted?: QuotedMessage;
    linkPreview?: boolean;
    mentionsEveryOne?: boolean;
    mentioned?: string[];
    encoding?: boolean;
    notConvertSticker?: boolean;
}

// Send Text Message
export interface SendTextRequest extends MessageMetadata {
    text: string;
}

export interface SendTextResponse extends MessageResponse {}

// Send Status Message
export interface SendStatusRequest extends MessageMetadata {
    type: 'text' | 'image' | 'audio';
    content: string;
    caption?: string;
    backgroundColor?: string;
    font?: number; // 1 = SERIF 2 = NORICAN_REGULAR 3 = BRYNDAN_WRITE 4 = BEBASNEUE_REGULAR 5 = OSWALD_HEAVY
    allContacts?: boolean;
    statusJidList?: string[];
}

export interface SendStatusResponse extends MessageResponse {
    participant: string;
}

export type MediaType = 'image' | 'document' | 'video' | 'audio' | 'ptv';

// Send Media Message
export interface SendMediaRequest extends MessageMetadata {
    mediatype: MediaType;
    mimetype?: string;
    caption?: string;
    // for document
    fileName?: string;
    // url or base64
    media: string;
}

export interface SendMediaResponse extends MessageResponse {}

// Send Audio Message
export interface SendAudioRequest extends MessageMetadata {
    audio: string;
}

export interface SendAudioResponse extends MessageResponse {}

// Send Sticker Message
export interface SendStickerRequest extends MessageMetadata {
    sticker: string;
}

export interface SendStickerResponse extends MessageResponse {}

// Send Location Message
export interface SendLocationRequest extends MessageMetadata {
    latitude: number;
    longitude: number;
    name?: string;
    address?: string;
}

export interface SendLocationResponse extends MessageResponse {}

// Send Contact Message
export interface SendContactRequest extends MessageMetadata {
    contact: {
        fullName: string;
        wuid: string;
        phoneNumber: string;
        organization?: string;
        email?: string;
        url?: string;
    }[];
}

export interface SendContactResponse extends MessageResponse {}

// Send Reaction Message
export interface SendReactionRequest {
    key: MessageKey;
    reaction: string;
}

export interface SendReactionResponse extends MessageResponse {}

// Send Poll Message
export interface SendPollRequest extends MessageMetadata {
    name: string;
    selectableCount: number;
    values: string[];
    messageSecret?: Uint8Array;
}

export interface SendPollResponse extends MessageResponse {}

// Send List Message
export interface SendListRequest extends MessageMetadata {
    title: string;
    description?: string;
    footerText?: string;
    buttonText: string;
    sections: {
        title: string;
        rows: {
            title: string;
            description: string;
            rowId: string;
        }[];
    }[];
}

export interface SendListResponse extends MessageResponse {}

// Send Buttons Message
export interface SendButtonsRequest extends MessageMetadata {
    thumbnailUrl?: string;
    title: string;
    description?: string;
    footer?: string;
    buttons: {
        type: 'reply' | 'copy' | 'url' | 'call' | 'pix';
        displayText?: string;
        id?: string;
        url?: string;
        copyCode?: string;
        phoneNumber?: string;
        currency?: string;
        name?: string;
        keyType?: 'phone' | 'email' | 'cpf' | 'cnpj' | 'random';
        key?: string;
    }[];
}

export interface SendButtonsResponse extends MessageResponse {}
