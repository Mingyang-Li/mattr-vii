import { IAuth, ListInboxesReqQuery } from '@/dto';

export interface ListInboxesArgs {
  auth: IAuth;
  query?: ListInboxesReqQuery;
}
