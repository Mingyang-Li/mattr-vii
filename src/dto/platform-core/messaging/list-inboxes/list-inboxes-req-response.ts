import { CreateInboxReqResponse } from '@/dto';

export interface ListInboxesReqResponse {
  data: CreateInboxReqResponse[];
  nextCursor?: string;
}
