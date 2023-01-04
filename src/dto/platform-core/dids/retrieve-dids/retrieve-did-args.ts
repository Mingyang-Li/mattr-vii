import { RetrieveDidsReqQuery } from '@/dto/platform-core/dids';
import { IAuth } from '@/dto/setup';

export interface RetrieveDidsArgs {
  auth: IAuth;
  query?: RetrieveDidsReqQuery;
}
