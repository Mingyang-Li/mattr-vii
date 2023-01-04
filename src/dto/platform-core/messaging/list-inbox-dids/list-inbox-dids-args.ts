import { IAuth } from '@/dto';

export interface ListInboxDidsArgs {
  auth: IAuth;
  inboxId: string;
  query?: {
    limit: number;
    cursor: string;
  };
}
