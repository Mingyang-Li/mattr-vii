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
const inbox = await client.PlatformCore.Messaging.createInbox({ body });
```

```ts
// List inboxes
const inboxes = await client.PlatformCore.Messaging.listInboxs();
```

```ts
// Retrieve inbox name
const inboxId = '4c8b950f-fc52-49d6-9644-fc82edeae5f2';
const inboxName = await client.PlatformCore.Messaging.retrieveInboxName({
  query: { inboxId },
});
```

```ts
// Update inbox
const inboxId = '4c8b950f-fc52-49d6-9644-fc82edeae5f2';
const updatedInbox = await client.PlatformCore.Messaging.updateInbox({
  query: { inboxId },
  body: { name: 'Inbox-1' },
});
```

```ts
// Delete an inbox
const deletedInbox = await client.PlatformCore.Messaging.deleteInbox({
  id: 'your_inbox_id',
});
```

```ts
// Register DID with in inbox
```

```ts
// List DIDs in an inbox
const res = await client.PlatformCore.Messaging.listInboxDids();
```

```ts
// Unregister DID within an inbox
```

```ts
// List inbox messages
const query: ApiTypes.PlatformCore.Messaging.ListInboxMessagesReqQuery = {
  inboxId: 'your-inbox-id',
};
const res = await client.PlatformCore.Messaging.listInboxMessages({ query });
```

```ts
// Retrieve a message
```

```ts
// Delete a message
const query: ApiTypes.PlatformCore.Messaging.DeleteMessageReqQuery = {
  inboxId: 'your-inbox-id',
  messageId: 'your-message-id',
};
const res = await client.PlatformCore.Messaging.deleteMessage({ query });
```

```ts
// Sign a message
const body: ApiTypes.PlatformCore.Messaging.SignMessageReqBody = {
  didUrl: 'did:key:placeholder',
  payload: 'placeholder',
};
const res = await client.PlatformCore.Messaging.signMessage({ body });
```

```ts
// Verify a message
const body: ApiTypes.PlatformCore.Messaging.VerifyMessageReqBody = {
  jws: 'placeholder',
};
const res = await client.PlatformCore.Messaging.verifyMessage({ body });
```

```ts
// Encrypt a message
const body: ApiTypes.PlatformCore.Messaging.EncryptMessageReqBody = {
  senderDidUrl: 'did:key:sender_DID',
  recipientDidUrls: ['did:key:recipient_DID_1', 'did:key:recipient_DID_2'],
  payload: 'PLACEHOLDER',
};
const res = await client.PlatformCore.Messaging.encryptMessage({ body });
```

```ts
// Decrypt a message
const body: ApiTypes.PlatformCore.Messaging.DecryptMessageReqBody = {
  jwe: 'placeholder',
};
const res = await client.PlatformCore.Messaging.decryptMessage({ body });
```

```ts
// Send a message
const body: ApiTypes.PlatformCore.Messaging.SendMessageReqBody = {
  to: 'did:key:recipient_DID',
  message: 'encrypted_message',
};
const res = await client.PlatformCore.Messaging.sendMessage({ body });
```