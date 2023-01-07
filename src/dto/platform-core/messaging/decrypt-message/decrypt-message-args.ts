import { IAuth } from '@/dto/setup';

export interface DecryptMessageArgs {
  auth: IAuth;
  body: {
    jwe: string;
  };
}
