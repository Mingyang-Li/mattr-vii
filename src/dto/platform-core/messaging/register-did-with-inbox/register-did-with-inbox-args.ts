import { IAuth, RegisterDidWithInboxReqBody } from '@/dto';

export interface RegisterInboxWithDidArgs {
  auth: IAuth;
  body: RegisterDidWithInboxReqBody;
}
