# 🧍 Platform Core - Messaging
## Assume you already setup the SDK following the [main README doc](https://github.com/Mingyang-Li/mattr-vii#readme)
Examples:
```ts
// Create an inbox
const date = new Date();
const body: ApiTypes.PlatformCore.Messaging.CreateInbox.CreateInboxReqBody = {
  id: 'placeholder',
  inboxId: 'placeholder',
  payload: 'placeholder',
  createdAt: date.toString(),
};
const inbox = await client.PlatformCore.Messaging.createInbox({
  auth: client.auth,
  body,
});
```