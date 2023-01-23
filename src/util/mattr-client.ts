import { MattrViiClient } from '@/client';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
export const client = new MattrViiClient({
  tenantSubdomain: config.get('MATTR_TENANT_URL'),
  authToken: config.get('MATTR_AUTH_TOKEN'),
});
