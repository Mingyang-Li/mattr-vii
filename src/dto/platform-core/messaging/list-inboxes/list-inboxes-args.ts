import { ListInboxesReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface ListInboxesArgs {
  auth: IAuth;
  query?: ListInboxesReqQuery;
}
