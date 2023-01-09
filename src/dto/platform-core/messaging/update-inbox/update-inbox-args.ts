import {
  UpdateInboxReqQuery,
  UpdateInboxReqBody,
} from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface UpdateInboxArgs {
  auth: IAuth;
  query: UpdateInboxReqQuery;
  body: UpdateInboxReqBody;
}
