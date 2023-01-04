import { CreateDidReqBody } from '@/dto/platform-core/dids/';
import { IAuth } from '@/dto/setup';

export interface CreateDidArgs {
  auth: IAuth;
  body: CreateDidReqBody;
}
