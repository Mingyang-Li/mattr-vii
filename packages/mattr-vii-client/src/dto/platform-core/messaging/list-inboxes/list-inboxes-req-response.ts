import { CreateInboxReqResponse } from "@/platform-core/messaging/create-inbox";

export interface ListInboxesReqResponse {
  data: CreateInboxReqResponse[];
  nextCursor?: string;
}
