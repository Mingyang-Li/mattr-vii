import { DeleteInboxReqQuery } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface DeleteInboxArgs {
  auth: IAuth;
  query: DeleteInboxReqQuery;
}
