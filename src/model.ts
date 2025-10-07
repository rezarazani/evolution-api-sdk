type InstanceConnectionStatus = "open" | "close" | "connecting";

type DeviceMessage = "ios" | "android" | "web" | "unknown" | "desktop";

type SessionStatus = "opened" | "closed" | "paused";

type TriggerType = "all" | "keyword" | "none" | "advanced";

type TriggerOperator = "contains" | "equals" | "startsWith" | "endsWith" | "regex";

type OpenaiBotType = "assistant" | "chatCompletion";

type DifyBotType = "chatBot" | "textGenerator" | "agent" | "workflow";

export interface Instance {
  id: string;
  name: string;
  connectionStatus: InstanceConnectionStatus;
  ownerJid?: string | null;
  profileName?: string | null;
  profilePicUrl?: string | null;
  integration?: string | null;
  number?: string | null;
  businessId?: string | null;
  token?: string | null;
  clientName?: string | null;
  disconnectionReasonCode?: number | null;
  disconnectionObject?: any | null;
  disconnectionAt?: Date | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  Chat: Chat[];
  Contact: Contact[];
  Message: Message[];
  Webhook?: Webhook | null;
  Chatwoot?: Chatwoot | null;
  Label: Label[];
  Proxy?: Proxy | null;
  Setting?: Setting | null;
  Rabbitmq?: Rabbitmq | null;
  Nats?: Nats | null;
  Sqs?: Sqs | null;
  Kafka?: Kafka | null;
  Websocket?: Websocket | null;
  Typebot: Typebot[];
  Session?: Session | null;
  MessageUpdate: MessageUpdate[];
  TypebotSetting?: TypebotSetting | null;
  Media: Media[];
  OpenaiCreds: OpenaiCreds[];
  OpenaiBot: OpenaiBot[];
  OpenaiSetting?: OpenaiSetting | null;
  Template: Template[];
  Dify: Dify[];
  DifySetting?: DifySetting | null;
  IntegrationSession: IntegrationSession[];
  EvolutionBot: EvolutionBot[];
  EvolutionBotSetting?: EvolutionBotSetting | null;
  Flowise: Flowise[];
  FlowiseSetting?: FlowiseSetting | null;
  Pusher?: Pusher | null;
  N8n: N8n[];
  N8nSetting: N8nSetting[];
  Evoai: Evoai[];
  EvoaiSetting?: EvoaiSetting | null;
}

export interface Session {
  id: string;
  sessionId: string;
  creds?: string | null;
  createdAt: Date;
  Instance: Instance;
}

export interface Chat {
  id: string;
  remoteJid: string;
  name?: string | null;
  labels?: any | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  Instance: Instance;
  instanceId: string;
  unreadMessages: number;
}

export interface Contact {
  id: string;
  remoteJid: string;
  pushName?: string | null;
  profilePicUrl?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  Instance: Instance;
  instanceId: string;
}

export interface Message {
  id: string;
  key: any;
  pushName?: string | null;
  participant?: string | null;
  messageType: string;
  message: any;
  contextInfo?: any | null;
  source: DeviceMessage;
  messageTimestamp: number;
  chatwootMessageId?: number | null;
  chatwootInboxId?: number | null;
  chatwootConversationId?: number | null;
  chatwootContactInboxSourceId?: string | null;
  chatwootIsRead?: boolean | null;
  Instance: Instance;
  instanceId: string;
  MessageUpdate: MessageUpdate[];
  Media?: Media | null;
  webhookUrl?: string | null;
  status?: string | null;
  sessionId?: string | null;
  session?: IntegrationSession | null;
}

export interface MessageUpdate {
  id: string;
  keyId: string;
  remoteJid: string;
  fromMe: boolean;
  participant?: string | null;
  pollUpdates?: any | null;
  status: string;
  Message: Message;
  messageId: string;
  Instance: Instance;
  instanceId: string;
}

export interface Webhook {
  id: string;
  url: string;
  headers?: any | null;
  enabled?: boolean | null;
  events?: any | null;
  webhookByEvents?: boolean | null;
  webhookBase64?: boolean | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Chatwoot {
  id: string;
  enabled?: boolean | null;
  accountId?: string | null;
  token?: string | null;
  url?: string | null;
  nameInbox?: string | null;
  signMsg?: boolean | null;
  signDelimiter?: string | null;
  number?: string | null;
  reopenConversation?: boolean | null;
  conversationPending?: boolean | null;
  mergeBrazilContacts?: boolean | null;
  importContacts?: boolean | null;
  importMessages?: boolean | null;
  daysLimitImportMessages?: number | null;
  organization?: string | null;
  logo?: string | null;
  ignoreJids?: any | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Label {
  id: string;
  labelId?: string | null;
  name: string;
  color: string;
  predefinedId?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Proxy {
  id: string;
  enabled: boolean;
  host: string;
  port: string;
  protocol: string;
  username: string;
  password: string;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Setting {
  id: string;
  rejectCall: boolean;
  msgCall?: string | null;
  groupsIgnore: boolean;
  alwaysOnline: boolean;
  readMessages: boolean;
  readStatus: boolean;
  syncFullHistory: boolean;
  wavoipToken?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Rabbitmq {
  id: string;
  enabled: boolean;
  events: any;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Nats {
  id: string;
  enabled: boolean;
  events: any;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Sqs {
  id: string;
  enabled: boolean;
  events: any;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Kafka {
  id: string;
  enabled: boolean;
  events: any;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Websocket {
  id: string;
  enabled: boolean;
  events: any;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Pusher {
  id: string;
  enabled: boolean;
  appId: string;
  key: string;
  secret: string;
  cluster: string;
  useTLS: boolean;
  events: any;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Typebot {
  id: string;
  enabled: boolean;
  description?: string | null;
  url: string;
  typebot: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  ignoreJids?: any | null;
  triggerType?: TriggerType | null;
  triggerOperator?: TriggerOperator | null;
  triggerValue?: string | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  Instance: Instance;
  instanceId: string;
  TypebotSetting: TypebotSetting[];
}

export interface TypebotSetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  typebotIdFallback?: string | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Fallback?: Typebot | null;
  Instance: Instance;
  instanceId: string;
}

export interface Media {
  id: string;
  fileName: string;
  type: string;
  mimetype: string;
  createdAt?: Date | null;
  Message: Message;
  messageId: string;
  Instance: Instance;
  instanceId: string;
}

export interface OpenaiCreds {
  id: string;
  name?: string | null;
  apiKey?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
  OpenaiAssistant: OpenaiBot[];
  OpenaiSetting?: OpenaiSetting | null;
}

export interface OpenaiBot {
  id: string;
  enabled: boolean;
  description?: string | null;
  botType: OpenaiBotType;
  assistantId?: string | null;
  functionUrl?: string | null;
}

export interface IntegrationSession {
  id: string;
  sessionId: string;
  remoteJid: string;
  pushName?: string | null;
  status: SessionStatus;
  awaitUser: boolean;
  context?: any | null;
  type?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Message: Message[];
  Instance: Instance;
  instanceId: string;
  parameters?: any | null;
  botId?: string | null;
}

export interface OpenaiSetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  speechToText?: boolean | null;
  createdAt?: Date | null;
  updatedAt: Date;
  OpenaiCreds?: OpenaiCreds | null;
  openaiCredsId: string;
  Fallback?: OpenaiBot | null;
  openaiIdFallback?: string | null;
  Instance: Instance;
  instanceId: string;
}

export interface Template {
  id: string;
  templateId: string;
  name: string;
  template: any;
  webhookUrl?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
}

export interface Dify {
  id: string;
  enabled: boolean;
  description?: string | null;
  botType: DifyBotType;
  apiUrl?: string | null;
  apiKey?: string | null;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  triggerType?: TriggerType | null;
  triggerOperator?: TriggerOperator | null;
  triggerValue?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
  DifySetting: DifySetting[];
}

export interface DifySetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Fallback?: Dify | null;
  difyIdFallback?: string | null;
  Instance: Instance;
  instanceId: string;
}

export interface EvolutionBot {
  id: string;
  enabled: boolean;
  description?: string | null;
  apiUrl?: string | null;
  apiKey?: string | null;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  triggerType?: TriggerType | null;
  triggerOperator?: TriggerOperator | null;
  triggerValue?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
  EvolutionBotSetting: EvolutionBotSetting[];
}

export interface EvolutionBotSetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Fallback?: EvolutionBot | null;
  botIdFallback?: string | null;
  Instance: Instance;
  instanceId: string;
}

export interface Flowise {
  id: string;
  enabled: boolean;
  description?: string | null;
  apiUrl?: string | null;
  apiKey?: string | null;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  triggerType?: TriggerType | null;
  triggerOperator?: TriggerOperator | null;
  triggerValue?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
  FlowiseSetting: FlowiseSetting[];
}

export interface FlowiseSetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Fallback?: Flowise | null;
  flowiseIdFallback?: string | null;
  Instance: Instance;
  instanceId: string;
}

export interface IsOnWhatsapp {
  id: string;
  remoteJid: string;
  jidOptions: string;
  lid?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface N8n {
  id: string;
  enabled: boolean;
  description?: string | null;
  webhookUrl?: string | null;
  basicAuthUser?: string | null;
  basicAuthPass?: string | null;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  triggerType?: TriggerType | null;
  triggerOperator?: TriggerOperator | null;
  triggerValue?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
  N8nSetting: N8nSetting[];
}

export interface N8nSetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Fallback?: N8n | null;
  n8nIdFallback?: string | null;
  Instance: Instance;
  instanceId: string;
}

export interface Evoai {
  id: string;
  enabled: boolean;
  description?: string | null;
  agentUrl?: string | null;
  apiKey?: string | null;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  triggerType?: TriggerType | null;
  triggerOperator?: TriggerOperator | null;
  triggerValue?: string | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Instance: Instance;
  instanceId: string;
  EvoaiSetting: EvoaiSetting[];
}

export interface EvoaiSetting {
  id: string;
  expire?: number | null;
  keywordFinish?: string | null;
  delayMessage?: number | null;
  unknownMessage?: string | null;
  listeningFromMe?: boolean | null;
  stopBotFromMe?: boolean | null;
  keepOpen?: boolean | null;
  debounceTime?: number | null;
  ignoreJids?: any | null;
  splitMessages?: boolean | null;
  timePerChar?: number | null;
  createdAt?: Date | null;
  updatedAt: Date;
  Fallback?: Evoai | null;
  evoaiIdFallback?: string | null;
  Instance: Instance;
  instanceId: string;
}

