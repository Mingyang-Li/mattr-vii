import { UpdateInboxReqArgs } from '@/dto/platform-core/messaging';
import { IAuth } from '@/dto/setup';

export interface UpdateInboxArgs {
  auth: IAuth;
  args: UpdateInboxReqArgs;
}
