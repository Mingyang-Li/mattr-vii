import { CreateInboxReqBody } from '@/dto/platform-core/messaging/create-inbox/create-inbox-req-body';
import { IAuth } from '@/dto/setup';

export interface CreateInboxArgs {
  auth: IAuth;
  body: CreateInboxReqBody;
}
