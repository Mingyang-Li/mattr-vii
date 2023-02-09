import { ApiTypes } from '@/index';
import { client } from '@/util/mattr-client';

export const createDid_key = async () => {
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'key',
    options: {
      keyType: 'ed25519',
    },
  };
  const did = await client.PlatformCore.DIDs.createDid({ body });
  console.log(did);
};

export const createDid_ion = async () => {
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'ion',
    options: {
      keyType: 'bls12381g2',
    },
  };
  const did = await client.PlatformCore.DIDs.createDid({ body });
  console.log(JSON.stringify(did));
};

export const createDid_web = async () => {
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'web',
    options: {
      url: 'example.com',
    },
  };
  const did = await client.PlatformCore.DIDs.createDid({ body });
  console.log(JSON.stringify(did));
};

export const resolveDid = async () => {
  const did = await client.PlatformCore.DIDs.resolveDid({
    id: 'did:key:z6MkmWBp7BHangrddxzTtEk7ypqJgnDC892iabgijN2GCnGR',
  });
  console.log(JSON.stringify(did));
};

export const retrieveDids = async () => {
  const dids = await client.PlatformCore.DIDs.retrieveDids();
  console.log(JSON.stringify(dids));
};
