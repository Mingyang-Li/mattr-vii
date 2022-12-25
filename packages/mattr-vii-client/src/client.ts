import { IMattrViiClient } from "mattr-vii-types";
import * as DidServices from "./services/platform-core/dids.service";
import * as MessagingService from "./services/platform-core/messaging.service";

export class MattrViiClient {
  constructor(public readonly auth: IMattrViiClient) {}

  public get PlatformCoreService() {
    return {
      DIDs: DidServices,
      Messaging: MessagingService,
      Webhooks: {},
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

const client = new MattrViiClient({ tenantUrl: "e", authToken: "s" });

const did = client.PlatformCoreService.DIDs.retrieveDids(client.auth);
