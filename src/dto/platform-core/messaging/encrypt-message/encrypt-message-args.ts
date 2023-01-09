import { EncryptMessageReqBody } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface EncryptMessageArgs {
  auth: IAuth;
  body: EncryptMessageReqBody;
}
