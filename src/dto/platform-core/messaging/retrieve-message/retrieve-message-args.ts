import { IAuth } from '@/dto/setup';

export interface RetrieveMessageArgs {
  auth: IAuth;
  query: {
    inboxId: string;
    messageId: string;
  };
}
