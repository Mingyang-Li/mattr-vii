import { IAuth } from '@/dto/setup';

export interface UnregisterDidWithinInboxArgs {
  auth: IAuth;
  query: {
    inboxId: string;
  };
  body: {
    did: string;
  };
}
