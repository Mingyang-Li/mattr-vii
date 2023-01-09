import { ListInboxDidsReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface ListInboxDidsArgs {
  auth: IAuth;
  inboxId: string;
  query?: ListInboxDidsReqQuery;
}
