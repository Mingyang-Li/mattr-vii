import { CreateInboxReqResponse } from '@/dto/platform-core/messaging';

export interface ListInboxesReqResponse {
  data: CreateInboxReqResponse[];
  nextCursor?: string;
}
