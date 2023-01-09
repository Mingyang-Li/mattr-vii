import {
  UnregisterDidWithinInboxReqQuery,
  UnregisterDidWithinInboxReqBody,
} from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface UnregisterDidWithinInboxArgs {
  auth: IAuth;
  query: UnregisterDidWithinInboxReqQuery;
  body: UnregisterDidWithinInboxReqBody;
}
