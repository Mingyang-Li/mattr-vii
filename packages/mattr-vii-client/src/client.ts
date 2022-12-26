import { IMattrViiClient } from "mattr-vii-types";
import * as DidServices from "@/services/platform-core/dids.service";
import * as MessagingService from "@/services/platform-core/messaging.service";

export class MattrViiClient {
  constructor(public readonly auth: IMattrViiClient) {}

  public get PlatformCoreService() {
    return {
      DIDs: DidServices,
      Messaging: MessagingService,
      Webhooks: {},
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

const client = new MattrViiClient({ tenantUrl: "e", authToken: "s" });

const did = client.PlatformCoreService.Messaging.createInbox(client.auth, {
  id: "s",
  inboxId: "s",
  payload: "s",
  createdAt: new Date(),
});
