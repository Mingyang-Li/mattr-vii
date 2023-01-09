# 🧍 Platform Core - Messaging
## Assume you already setup the SDK following the [main README doc](https://github.com/Mingyang-Li/mattr-vii#readme)
Example usage:
```ts
// Create an inbox
const date = new Date();
const body: ApiTypes.PlatformCore.Messaging.CreateInboxReqBody = {
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

```ts
// Register DID with in inbox
```

```ts
// List DIDs in an inbox
```

```ts
// Unregister DID within an inbox
```

```ts
// List inbox messages
```

```ts
// Retrieve a message
```

```ts
// Delete a message
```

```ts
// Sign a message
const body: ApiTypes.PlatformCore.Messaging.SignMessageReqBody = {
  didUrl: 'did:key:placeholder',
  payload: 'placeholder',
};
const res = await client.PlatformCore.Messaging.signMessage({ auth, body });
```

```ts
// Verify a message
```

```ts
// Encrypt a message
const body: ApiTypes.PlatformCore.Messaging.EncryptMessageReqBody = {
  senderDidUrl: 'did:key:sender_DID',
  recipientDidUrls: ['did:key:recipient_DID_1', 'did:key:recipient_DID_2'],
  payload: 'PLACEHOLDER',
};
const res = await client.PlatformCore.Messaging.encryptMessage({
  auth,
  body,
});
```

```ts
// Decrypt a message
```

```ts
// Send a message
```