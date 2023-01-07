import { RegisterDidWithInboxReqBody } from '@/dto/platform-core/messaging/register-did-with-inbox';
import { IAuth } from '@/dto/setup';

export interface RegisterInboxWithDidArgs {
  auth: IAuth;
  body: RegisterDidWithInboxReqBody;
}
