import { IAuth, IMattrViiClient } from '@/dto/setup';
import {
  DidService,
  MessagingService,
  WebhookService,
} from '@/services/platform-core';

export class MattrViiClient implements IMattrViiClient {
  constructor(public readonly auth: IAuth) {}

  public get PlatformCore() {
    return {
      DIDs: DidService(this.auth),
      Messaging: MessagingService(this.auth),
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
