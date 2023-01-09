import { IDidService } from '@/dto/setup';

export interface IPlatformCore {
  DIDs: IDidService;
  Messaging: any;
  Webhooks: any;
}
