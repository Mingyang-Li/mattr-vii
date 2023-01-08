import { UpdateInboxReqBody } from '@/dto/platform-core/messaging/update-inbox/update-inbox-req-body';
import { IAuth } from '@/dto/setup';

export interface UpdateInboxArgs {
  auth: IAuth;
  query: { inboxId: string };
  body: UpdateInboxReqBody;
}
