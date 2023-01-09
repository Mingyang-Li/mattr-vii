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
  createDid: (args: CreateDidArgs) => Promise<CreateDidReqResponse>;
  retrieveDids: (args: RetrieveDidsArgs) => Promise<RetrieveDidsReqResponse>;
  resolveDid: (args: ResolveDidArgs) => Promise<ResolveDidReqResponse>;
  deleteDid: (args: DeleteDidArgs) => Promise<void>;
  wellKnownDidConfiguration: (
    auth: IAuth,
  ) => Promise<WellKnownDidConfigResponse>;
}
