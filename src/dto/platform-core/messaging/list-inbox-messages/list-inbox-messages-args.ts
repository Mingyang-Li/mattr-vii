import { IAuth } from '@/dto/setup';

export interface ListInboxMessagesArgs {
  auth: IAuth;
  inboxId: string;
  query?: {
    limit: number;
    cursor?: string;
  };
}
