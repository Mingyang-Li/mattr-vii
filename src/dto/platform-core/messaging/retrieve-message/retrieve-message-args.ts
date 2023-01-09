import { RetrieveMessageReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface RetrieveMessageArgs {
  auth: IAuth;
  query: RetrieveMessageReqQuery;
}
