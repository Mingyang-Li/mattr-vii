# 🧍 Platform Core - Messaging
## Assume you already setup the SDK following the [main README doc](https://github.com/Mingyang-Li/mattr-vii#readme)
Example usage:
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

```ts
// Update inbox
const inboxId = '4c8b950f-fc52-49d6-9644-fc82edeae5f2';
const updatedInbox = await client.PlatformCore.Messaging.updateInbox({
  auth,
  query: { inboxId },
  body: { name: 'Inbox-1' },
});
```

```ts
// Delete an inbox
const deletedInbox = await client.PlatformCore.Messaging.deleteInbox({
  auth,
  id: 'your_inbox_id',
});
```