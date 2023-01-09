import { SendMessageReqBody } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface SendMessageArgs {
  auth: IAuth;
  body: SendMessageReqBody;
}
