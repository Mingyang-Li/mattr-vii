# 🧍 Platform Core - Messaging
## Assume you already setup the SDK like so:
```ts
import { MattrViiClient, ApiTypes } from 'mattr-vii-client';

const client = new MattrViiClient({
  tenantUrl: process.env.MATTR_TENANT_URL,
  authToken: process.env.MATTR_AUTH_TOKEN,
});
```
Examples:
```ts
// Create an inbox
const body: ApiTypes.PlatformCore.Messaging.CreateInboxReqBody = {
  id: 'placeholder',
  inboxId: 'placeholder',
  payload: 'placeholder',
  createdAt: new Date(),
};
const inbox = await client.PlatformCore.Messaging.createInbox({ auth, body });
```