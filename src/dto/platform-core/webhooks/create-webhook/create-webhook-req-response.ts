export interface CreateWebhookReqResponse {
  id: string;
  events: string[];
  url: string;
  disabled: boolean;
}
