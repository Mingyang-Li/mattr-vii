import { ResolveDidIon, ResolveDidKey, ResolveDidWeb } from '@/dto';

export type ResolveDidReqResponse =
  | ResolveDidKey
  | ResolveDidWeb
  | ResolveDidIon;
