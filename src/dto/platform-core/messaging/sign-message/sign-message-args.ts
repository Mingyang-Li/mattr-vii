import { SignMessageReqBody } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface SignMessageArgs {
  auth: IAuth;
  body: SignMessageReqBody;
}
