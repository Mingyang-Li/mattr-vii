import { IDidService } from '@/dto/setup';

export interface IPlatformCore {
  DIDs: IDidService;
  Messaging: object;
  Webhooks: object;
}
