import { MattrViiClient } from '@/client';
import { ConfigService } from '@nestjs/config';
import * as ApiTypes from '@/dto';

const config = new ConfigService();
const client = new MattrViiClient({
  tenantUrl: config.get('MATTR_TENANT_URL'),
  authToken: config.get('MATTR_AUTH_TOKEN'),
});

const auth = client.auth;

export const createDid_key = async () => {
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'key',
    options: {
      keyType: 'ed25519',
    },
  };
  const did = await client.PlatformCore.DIDs.createDid({ auth, body });
  console.log(did);
};

export const createDid_ion = async () => {
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'ion',
    options: {
      keyType: 'bls12381g2',
    },
  };
  const did = await client.PlatformCore.DIDs.createDid({ auth, body });
  console.log(JSON.stringify(did));
};

export const createDid_web = async () => {
  const body: ApiTypes.PlatformCore.DIDs.CreateDidReqBody = {
    method: 'web',
    options: {
      url: 'example.com',
    },
  };
  const did = await client.PlatformCore.DIDs.createDid({ auth, body });
  console.log(JSON.stringify(did));
};

export const resolveDid = async () => {
  const did = await client.PlatformCore.DIDs.resolveDid({
    auth,
    id: 'did:key:z6MkmWBp7BHangrddxzTtEk7ypqJgnDC892iabgijN2GCnGR',
  });
  console.log(JSON.stringify(did));
};

export const retrieveDids = async () => {
  const dids = await client.PlatformCore.DIDs.retrieveDids({ auth });
  console.log(JSON.stringify(dids));
};

export const createInbox = () => {
  const body: ApiTypes.PlatformCore.Messaging.CreateInbox.CreateInboxReqBody = {
    id: 'placeholder',
    inboxId: 'placeholder',
    payload: 'placeholder',
    createdAt: new Date(),
  };
  const inbox = client.PlatformCore.Messaging.createInbox({ auth, body });
  console.log(inbox);
};

export const main = async () => {
  // await createDid_ion();
};
