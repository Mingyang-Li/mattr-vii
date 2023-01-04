# 🧍 Platform Core - DIDs

## Assume you already setup the SDK like so:
```ts
import { MattrViiClient, ApiTypes } from 'mattr-vii-client';

const client = new MattrViiClient({
  tenantUrl: process.env.MATTR_TENANT_URL,
  authToken: process.env.MATTR_AUTH_TOKEN,
});
```
Examples:
```ts
// Create a DID (key method):
const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
  method: 'key',
  options: {
    keyType: 'ed25519',
  },
};
const did = await client.PlatformCore.DIDs.createDid({ auth, body });
```

```ts
// Create a DID (Ion method):
const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
  method: 'ion',
  options: {
    keyType: 'bls12381g2',
  },
};
const did = await client.PlatformCore.DIDs.createDid({ auth, body });
```

```ts
// Create a DID (Web method):
const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
  method: 'web',
  options: {
    url: 'example.com',
  },
};
const did = await client.PlatformCore.DIDs.createDid({ auth, body });
```

