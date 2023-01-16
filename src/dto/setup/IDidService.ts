import {
  CreateDidArgs,
  CreateDidReqResponse,
  DeleteDidArgs,
  ResolveDidArgs,
  ResolveDidReqResponse,
  RetrieveDidsArgs,
  RetrieveDidsReqResponse,
  WellKnownDidConfigResponse,
} from '@/dto/platform-core/dids';
import { IAuth } from '@/dto/setup/IAuth';

export interface IDidService {
  createDid: (
    auth: IAuth,
  ) => (args: CreateDidArgs) => Promise<CreateDidReqResponse>;
  retrieveDids: (
    auth: IAuth,
  ) => (args: RetrieveDidsArgs) => Promise<RetrieveDidsReqResponse>;
  resolveDid: (
    auth: IAuth,
  ) => (args: ResolveDidArgs) => Promise<ResolveDidReqResponse>;
  deleteDid: (auth: IAuth) => (args: DeleteDidArgs) => Promise<void>;
  wellKnownDidConfiguration: () => Promise<WellKnownDidConfigResponse>;
}
