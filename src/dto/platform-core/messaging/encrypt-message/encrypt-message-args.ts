import { IAuth } from '@/dto/setup';

export interface EncryptMessageArgs {
  auth: IAuth;
  body: {
    senderDidUrl: string;
    recipientDidUrls: string[];
    payload: any;
  };
}
