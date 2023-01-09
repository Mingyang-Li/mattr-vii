import { GetWebhooksReqQuery } from '@/dto/platform-core/webhooks/get-webhooks/get-webhooks-req-query';
import { IAuth } from '@/dto/setup';

export interface GetWebhooksArgs {
  auth: IAuth;
  query: GetWebhooksReqQuery;
}
