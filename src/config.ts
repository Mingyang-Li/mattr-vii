import { IAuth } from '@/dto';

export const config: IAuth = {
  tenantUrl: process.env.MATTR_TENANT_URL || '',
  authToken: process.env.MATTR_AUTH_TOKEN || '',
};
