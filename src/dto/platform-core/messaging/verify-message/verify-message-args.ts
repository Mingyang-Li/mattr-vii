import { IAuth } from '@/dto/setup';

export interface VerifyMessageArgs {
  auth: IAuth;
  body: {
    jws: string;
  };
}
