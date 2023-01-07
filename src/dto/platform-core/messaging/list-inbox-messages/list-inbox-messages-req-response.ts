export interface ListInboxMessagesReqResponse {
  data: {
    id: string;
    inboxId: string;
    payload: string;
    createdAt: string;
  }[];
  nextCursor?: string;
}
