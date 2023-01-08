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
const inbox = await client.PlatformCore.Messaging.createInbox({ auth, body });
```

```ts
// List inboxes
const inboxes = await client.PlatformCore.Messaging.listInboxs({ auth });
```

```ts
// Retrieve inbox name
const inboxId = '4c8b950f-fc52-49d6-9644-fc82edeae5f2';
const inboxName = await client.PlatformCore.Messaging.retrieveInboxName({
  auth,
  query: { inboxId },
});
```