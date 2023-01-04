import { IAuth, IMattrViiClient } from '@/dto/setup';
import * as DidServices from '@/services/platform-core/did.service';
import * as MessagingServices from '@/services/platform-core/messaging.service';
import * as WebhookServices from '@/services/platform-core/webhook.service';

export class MattrViiClient implements IMattrViiClient {
  constructor(public readonly auth: IAuth) {}

  public get PlatformCore() {
    return {
      DIDs: DidServices,
      Messaging: MessagingServices,
      Webhooks: WebhookServices,
    };
  }

  public get WebSemanticCredentials() {
    return {
      Credentials: {},
      Revocation: {},
      Presentations: {},
      LinkedData: {},
    };
  }

  public get CompactCredentials() {
    return {
      Core: {},
      PdfTemplateManagement: {},
      PdfGeneration: {},
      DigitalPassTemplateManagement: {},
      DigitalPassGeneration: {},
    };
  }
}
