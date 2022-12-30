import { IAuth } from '@/dto';
import * as DidServices from '@/services/platform-core/did.service';
import * as MessagingServices from '@/services/platform-core/messaging.service';
import * as WebhookServices from '@/services/platform-core/webhook.service';

export class MattrViiClient {
  constructor(public readonly auth: IAuth) {}

  public get PlatformCoreService() {
    return {
      DIDs: DidServices,
      Messaging: MessagingServices,
      Webhooks: WebhookServices,
    };
  }

  public get WebSemanticCredentialsService() {
    return {
      Credentials: {},
      Revocation: {},
      Presentations: {},
      LinkedData: {},
    };
  }

  public get CompactCredentialsService() {
    return {
      Core: {},
      PdfTemplateManagement: {},
      PdfGeneration: {},
      DigitalPassTemplateManagement: {},
      DigitalPassGeneration: {},
    };
  }
}

const client = new MattrViiClient({ tenantUrl: 'e', authToken: 's' });
