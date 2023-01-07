import { IAuth } from '@/dto/setup';

export interface SignMessageArgs {
  auth: IAuth;
  body: {
    didUrl: string;
    payload: any;
  };
}
