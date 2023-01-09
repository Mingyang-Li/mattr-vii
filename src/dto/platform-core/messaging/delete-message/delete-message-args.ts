import { DeleteMessageReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface DeleteMessageArgs {
  auth: IAuth;
  query: DeleteMessageReqQuery;
}
