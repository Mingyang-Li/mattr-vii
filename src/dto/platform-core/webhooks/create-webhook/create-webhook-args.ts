import { IAuth } from '@/dto/setup';

type IEvent = 'OidcIssuerCredentialIssued' | string;

export interface CreateWebhookArgs {
  auth: IAuth;
  body: {
    events: IEvent[];
    url: string;
    disabled?: boolean;
  };
}
