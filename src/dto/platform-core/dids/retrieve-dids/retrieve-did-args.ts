import { IAuth, RetrieveDidsReqQuery } from '@/dto';

export interface RetrieveDidsArgs {
  auth: IAuth;
  query?: RetrieveDidsReqQuery;
}
