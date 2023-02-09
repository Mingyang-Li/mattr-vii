import { MattrViiClient } from '@/client';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
export const client = new MattrViiClient({
  baseUrl: config.get('MATTR_BASE_URL'),
  authToken: config.get('MATTR_AUTH_TOKEN'),
});
