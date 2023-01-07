import { IAuth } from '@/dto/setup';

export interface DeleteMessageArgs {
  auth: IAuth;
  query: {
    inboxId: string;
    messageId: string;
  };
}
