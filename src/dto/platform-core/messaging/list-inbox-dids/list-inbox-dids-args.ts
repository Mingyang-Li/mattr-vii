import { IAuth } from '@/dto/setup';

export interface ListInboxDidsArgs {
  auth: IAuth;
  inboxId: string;
  query?: {
    limit: number;
    cursor: string;
  };
}
