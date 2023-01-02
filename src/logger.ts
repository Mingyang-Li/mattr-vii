import { MattrViiClient } from '@/client';
import { CreateDidReqBody } from '@/dto';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
const client = new MattrViiClient({
  tenantUrl: config.get('MATTR_TENANT_URL'),
  authToken: config.get('MATTR_AUTH_TOKEN'),
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
  // const dids = await client.PlatformCoreService.DIDs.retrieveDids(client.auth, {
  //   cursor:
  //     'Y3JlYXRlZEF0PTIwMjItMTAtMDNUMjMlM0E0NyUzQTEzLjI3MlomaWQ9NjE3NjY2YjctZjI2Ny00ZTM4LTliYmItNzhmNDY4NjA0ZWVl',
  //   limit: 2,
  // });
  // console.log(JSON.stringify(dids));
};
