import { IAuth } from '@/dto/setup';

export interface ResolveDidArgs {
  auth: IAuth;
  id: string;
}
