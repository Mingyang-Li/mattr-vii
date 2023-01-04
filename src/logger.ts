import { MattrViiClient } from '@/client';
import { CreateDidReqBody } from '@/dto';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
const client = new MattrViiClient({
  tenantUrl: config.get('MATTR_TENANT_URL'),
  authToken: config.get('MATTR_AUTH_TOKEN'),
});

const auth = client.auth;

export const createDid_key = async () => {
  const body: CreateDidReqBody = {
    method: 'key',
    options: {
      keyType: 'ed25519',
    },
  };
  const did = await client.PlatformCoreService.DIDs.createDid({ auth, body });
  console.log(did);
};

export const createDid_ion = async () => {
  const body: CreateDidReqBody = {
    method: 'ion',
    options: {
      keyType: 'bls12381g2',
    },
  };
  const did = await client.PlatformCoreService.DIDs.createDid({ auth, body });
  console.log(JSON.stringify(did));
};

export const resolveDid = async () => {
  const did = await client.PlatformCoreService.DIDs.resolveDid({
    auth,
    id: 'did:key:z6MkmWBp7BHangrddxzTtEk7ypqJgnDC892iabgijN2GCnGR',
  });
  console.log(JSON.stringify(did));
};

export const retrieveDids = async () => {
  const dids = await client.PlatformCoreService.DIDs.retrieveDids({ auth });
  console.log(JSON.stringify(dids));
};

export const main = async () => {
  // await createDid_ion();
};
