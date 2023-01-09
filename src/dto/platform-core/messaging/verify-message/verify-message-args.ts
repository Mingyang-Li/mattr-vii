import { VerifyMessageReqBody } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface VerifyMessageArgs {
  auth: IAuth;
  body: VerifyMessageReqBody;
}
