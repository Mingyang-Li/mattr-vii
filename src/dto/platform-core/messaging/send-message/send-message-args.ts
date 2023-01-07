import { IAuth } from '@/dto/setup';

export interface SendMessageArgs {
  auth: IAuth;
  body: {
    to: string;
    message: string | any;
  };
}
