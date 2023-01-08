import { CreateWebhookBody } from '@/dto/platform-core/webhooks/create-webhook';
import { IAuth } from '@/dto/setup';

export interface CreateWebhookArgs {
  auth: IAuth;
  body: CreateWebhookBody;
}
