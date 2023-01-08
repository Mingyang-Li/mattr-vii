import { IAuth } from '@/dto/setup';

export interface GetWEebhookArgs {
  auth: IAuth;
  query?: {
    limit: number;
    cursor: string;
  };
}
