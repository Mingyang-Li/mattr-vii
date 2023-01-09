import { DecryptMessageReqBody } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface DecryptMessageArgs {
  auth: IAuth;
  body: DecryptMessageReqBody;
}
