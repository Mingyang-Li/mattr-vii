export default () => ({
  tenantUrl: process.env.MATTR_TENANT_URL || '',
  authToken: process.env.MATTR_AUTH_TOKEN || '',
});
