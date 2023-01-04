# 🧍 Platform Core - Messaging
## Assume you already setup the SDK following the [main README doc](https://github.com/Mingyang-Li/mattr-vii#readme)
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