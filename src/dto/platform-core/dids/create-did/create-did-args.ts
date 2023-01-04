import { IAuth, CreateDidReqBody } from '@/dto';

export interface CreateDidArgs {
  auth: IAuth;
  body: CreateDidReqBody;
}
