import { RetrieveInboxNameReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface RetrieveInboxNameArgs {
  auth: IAuth;
  query: RetrieveInboxNameReqQuery;
}
