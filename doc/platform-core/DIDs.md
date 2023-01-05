# 🧍 Platform Core - DIDs

## Assume you already setup the SDK following the [main README doc](https://github.com/Mingyang-Li/mattr-vii#readme)

Examples:
```ts
// Create a DID (key method):
const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
  method: 'key',
  options: {
    keyType: 'ed25519',
  },
};
const did = await client.PlatformCore.DIDs.createDid({ auth: client.auth, body });
```

```ts
// Create a DID (Ion method):
const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
  method: 'ion',
  options: {
    keyType: 'bls12381g2',
  },
};
const did = await client.PlatformCore.DIDs.createDid({ auth: client.auth, body });
```

```ts
// Create a DID (Web method):
const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
  method: 'web',
  options: {
    url: 'example.com',
  },
};
const did = await client.PlatformCore.DIDs.createDid({ auth: client.auth, body });
```

```ts
// Resolve a DID
const id = 'did:key:placeholder';
const did = await client.PlatformCore.DIDs.resolveDid({ auth: client.auth, id });
```

```ts
// Retrieve DIDs
const id = 'did:key:placeholder';
const dids = await client.PlatformCore.DIDs.retrieveDids({ auth: client.auth });
```