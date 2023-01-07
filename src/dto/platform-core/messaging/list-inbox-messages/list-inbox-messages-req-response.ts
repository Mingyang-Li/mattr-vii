import { Message } from '@/dto/platform-core/messaging';

export interface ListInboxMessagesReqResponse {
  data: Message[];
  nextCursor?: string;
}
