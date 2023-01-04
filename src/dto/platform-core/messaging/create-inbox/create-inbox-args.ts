import { CreateInboxReqBody, IAuth } from '@/dto';

export interface CreateInboxArgs {
  auth: IAuth;
  body: CreateInboxReqBody;
}
