import { ListInboxesReqQuery } from '@/dto/platform-core/messaging/list-inboxes';
import { IAuth } from '@/dto/setup';

export interface ListInboxesArgs {
  auth: IAuth;
  query?: ListInboxesReqQuery;
}
