import { MattrViiClient } from '@/client';
import { config } from '@/config';
import { CreateDidReqBody } from '@/dto';

const client = new MattrViiClient({
  tenantUrl: config.tenantUrl,
  authToken: config.authToken,
});

export const main = async () => {
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
  console.log(did);
  console.log(config);
};
