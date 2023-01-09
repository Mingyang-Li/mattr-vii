import { ListInboxMessagesReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface ListInboxMessagesArgs {
  auth: IAuth;
  query?: ListInboxMessagesReqQuery;
}
