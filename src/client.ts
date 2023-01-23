import { IAuth } from '@/dto/setup';
import {
  DidService,
  MessagingService,
  WebhookService,
} from '@/services/platform-core';
import {
  CredentialService,
  LinkedDataService,
  PresentationService,
  RevocationService,
} from '@/services/web-semantic-credentials';

export class MattrViiClient {
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
      Credentials: CredentialService(this.auth),
      Revocation: RevocationService(this.auth),
      Presentations: PresentationService(this.auth),
      LinkedData: LinkedDataService(this.auth),
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
