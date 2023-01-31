# 🚀 MATTR VII Client

A non-official Node.js client for [MATTR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/)

## ❓ Background
Interacting with [MATTR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/) has a steep learning curve, doesn't matter if you make API calls to their platform using Postman or writing custom code. The most challenging part of it comes down to **not knowing the exact data type you need to provide and will be receiving** for each API call, which makes it even harder for teams to understand how to interact with [MATTR VII API platform](https://learn.mattr.global/api-reference/v1.0.1/) --- on top of learning the domain knowledge surrounding **dencentralised identities**, **cryptography** as well as **Open-ID Connect (OIDC)**. This SDK is an attempt to provide a layer of abstraction over the complexities and making it easier for everyone to interact with [MATTR VII](https://learn.mattr.global/api-reference/v1.0.1/)

## 🔑 The problem we're solving:
Simplifying API calls to MATTR VII by giving you code autocompletion for making requests & return data-types.

##  📚 Usage:
Install the SDK
```shell
yarn add mattr-vii-client
// or
npm install mattr-vii-client
```

🛒 Import the SDK
```ts
import { MattrViiClient, ApiTypes } from 'mattr-vii-client'
```

🔥 Initialise the client
```ts
const client = new MattrViiClient({
  tenantSubdomain: process.env.MATTR_TENANT_URL,
  authToken: process.env.MATTR_AUTH_TOKEN,
});
```

## ‍🏫 Start using the SDK following these guidelines:
### Platform Core:
- [DIDs](https://github.com/Mingyang-Li/mattr-vii/blob/main/doc/platform-core/DIDs.md)
- [Messaging](https://github.com/Mingyang-Li/mattr-vii/blob/main/doc/platform-core/Messaging.md)
- [Webhooks](https://github.com/Mingyang-Li/mattr-vii/blob/main/doc/platform-core/Webhooks.md)

## 🐈 Misc: Using the SDK in NestJS
```ts
// mattr.service.ts
@Injectable()
export class MattrService extends MattrViiClient {
  super({
    tenantSubdomain: process.env.MATTR_TENANT_URL,
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
  public async createUser(@Body() args: CreateUserBody) {
    const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
      method: 'key',
      options: {
        keyType: 'ed25519',
      },
    };
    const did = await this.mattrService.PlatformCore.DIDs.createDid(body);
    return await this.prismaService.user.create({
      ...args,
      did: did.did,
    })
  }
}
```

## ⏰ Use-case example - Then VS now
```ts
/*
Example use-case:
=== Send a verifiable credential to a Digital Wallet ===

Main steps:
1. Create a DID
2. Create a Credential using the DID created
3. Sign a message using the Credential you just created
4. Encrypt the signed message
5. Send the message to a wallet
*/

// 💩 Before 💩
// ❌ Raw API calls
const url = `https://${process.env.MATTR_TENANT}.vii.mattr.global/core/v1`;
const createDid = async () => {
  const res = await fetch(`${url}/dids`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: 'Bearer <YOUR_JWT_HERE>',
    },
    // ❌ You have no idea if the body you passed in is what the endpoint expects
    body: JSON.stringify({
      method: 'key',
      options: {keyType: 'ed25519'},
    }),
  });
  return res.json();
  // ❌ You have no clue how big & nested your response will be...
}


// ✅ Now with our SDK ✅
/* main.ts */
import { MattrViiClient, ApiTypes } from 'mattr-vii-client';

// ✅ Initialise the SDK once and use it across your backend
// ✅ Minimal environment variables required
const client = new MattrViiClient({
  tenantSubdomain: process.env.MATTR_TENANT_URL,
  authToken: process.env.MATTR_AUTH_TOKEN,
});

export const createDid = async () => {
  // ✅ Tells you exactly the shape of your request body
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'key',
    options: {
      keyType: 'ed25519',
    },
  };
  // ✅ Auto-completion helps you figuring out which method to call
  // ✅ Enforcing you to pass in the correct body for each request
  // ✅ Has a response type
  return await client.PlatformCore.DIDs.createDid({ body });
}
```
