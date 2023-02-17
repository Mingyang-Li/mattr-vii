class MessagingService {
  public async encryptMessage() {
    return;
  }

  public async decryptMessage() {
    return;
  }

  public async signMessage() {
    return;
  }

  public async verifyMessage() {
    return;
  }

  public async sendMessage() {
    return;
  }
}
class WebSemanticCredentialsService {
  public get Messaging() {
    return new MessagingService();
  }
}

class PlatformCoreService {
  public get DIDs() {
    return new DIDsService();
  }
}

class DIDsService {
  public async createDid() {
    return;
  }
}

export class DemoClient {
  public get PlatformCore() {
    return new PlatformCoreService();
  }
  public get WebSemanticCredentials() {
    return new WebSemanticCredentialsService();
  }
}
