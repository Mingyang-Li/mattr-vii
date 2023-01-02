# 🚀 MATTR VII Client

A Node.js server-side client for [MATRR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/)

## ❓ Background
Interacting with [MATRR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/) has a steep learning curve, doesn't matter if you make API calls to their platform using Postman or writing custom code. The most challenging part of it comes down to **not knowing the exact data type you need to provide and will be receiving** for each API call, which makes it even harder for teams to understand how to interact with [MATRR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/) on top of learning the domain knowledge surrounding **dencentralised identities**, **cryptography** as well as **Open-ID Connect (OIDC)**. This SDK is an attempt to provide a layer of abstraction over the complexities and making it easier for everyone to interact with [MATRR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/)

##  📚 Usage:
Install the SDK
```shell
yarn add mattr-vii-client
// or
npm install mattr-vii-vlient
```

Import the SDK
```ts
import { MattrViiClient } from 'mattr-vii-client'
```

Initialise the client
```ts
const client = new MattrViiClient({
  tenantUrl: process.env.MATTR_TENANT_URL,
  authToken: process.env.MATTR_AUTH_TOKEN,
})
```

Use the SDK like so:

Create a DID (key)
```ts
const body: CreateDidReqBody = {
  method: 'key',
  options: {
    keyType: 'ed25519',
  },
};
const did = await client.PlatformCoreService.DIDs.createDid(
  client.auth,
  body,
);
```

Resolve a DID
```ts
const did = await client.PlatformCoreService.DIDs.resolveDid(
  client.auth,
  'did:key:placeholder',
);
```

😺 Using the SDK NestJS
```ts
// mattr.service.ts
@Injectable()
export class MattrService extends MattrViiClient {
  super({
    tenantUrl: process.env.MATTR_TENANT_URL,
    authToken: process.env.MATTR_AUTH_TOKEN,
  })
}

// user.controller.ts
@Controller('user')
export class UserController {
  constructor(
    private readonly mattrService: MattrService,
    private readonly prismaService: PrismaService,
  ) {};

  @Post('create')
  public async createUser(@Body body: CreateUserBody) {
    const body: CreateDidReqBody = {
      method: 'key',
      options: {
        keyType: 'ed25519',
      },
    };
    const did = await client.PlatformCoreService.DIDs.createDid(
      client.auth,
      body,
    );
    return await this.prismaService.user.create({
      ...,
      did: did.did,
    })
  }
}
```