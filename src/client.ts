import { IAuth, IMattrViiClient, IPlatformCore } from '@/dto/setup';
import { DidService, WebhookService } from '@/services/platform-core';
import * as MessagingServices from '@/services/platform-core/messaging.service';

export class MattrViiClient implements IMattrViiClient {
  constructor(public readonly auth: IAuth) {}

  public get PlatformCore(): IPlatformCore {
    return {
      DIDs: DidService(this.auth),
      Messaging: MessagingServices,
      Webhooks: WebhookService(this.auth),
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
