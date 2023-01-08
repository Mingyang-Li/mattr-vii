import { IAuth } from '@/dto/setup';

export interface RetrieveInboxNameArgs {
  auth: IAuth;
  query: {
    inboxId: string;
  };
}
