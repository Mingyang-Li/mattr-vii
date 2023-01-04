import { RegisterDidWithInboxReqBody } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface RegisterInboxWithDidArgs {
  auth: IAuth;
  body: RegisterDidWithInboxReqBody;
}
