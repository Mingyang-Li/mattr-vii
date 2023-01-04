import { UpdateInboxReqArgs, IAuth } from '@/dto';

export interface UpdateInboxArgs {
  auth: IAuth;
  args: UpdateInboxReqArgs;
}
