import { UpdateInboxReqArgs } from '@/dto/platform-core/messaging/update-inbox';
import { IAuth } from '@/dto/setup';

export interface UpdateInboxArgs {
  auth: IAuth;
  args: UpdateInboxReqArgs;
}
