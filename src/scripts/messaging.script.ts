import { ApiTypes } from '@/index';
import { client } from '@/util/mattr-client';

export const createInbox = async () => {
  const date = new Date();
  const body: ApiTypes.PlatformCore.Messaging.CreateInboxReqBody = {
    id: 'placeholder',
    inboxId: 'placeholder',
    payload: 'placeholder',
    createdAt: date.toString(),
  };
  const inbox = await client.PlatformCore.Messaging.createInbox({ body });
  console.log(inbox);
};

export const listInboxes = async () => {
  const inboxes = await client.PlatformCore.Messaging.listInboxs({});
  console.log(inboxes);
};

export const retrieveInboxName = async () => {
  const inboxId = '4c8b950f-fc52-49d6-9644-fc82edeae5f2';
  const inboxName = await client.PlatformCore.Messaging.retrieveInboxName({
    query: {
      inboxId,
    },
  });
  console.log(inboxName);
};

export const updateInbox = async () => {
  const inboxId = '4c8b950f-fc52-49d6-9644-fc82edeae5f2';
  const updatedInbox = await client.PlatformCore.Messaging.updateInbox({
    query: { inboxId },
    body: { name: 'Inbox-1' },
  });
  console.log(updatedInbox);
};

export const deleteInbox = async () => {
  const query: ApiTypes.PlatformCore.Messaging.DeleteInboxReqQuery = {
    inboxId: 'your_inbox_id',
  };
  const deletedInbox = await client.PlatformCore.Messaging.deleteInbox({
    query,
  });
  console.log(deletedInbox);
};

export const signMessage = async () => {
  const body: ApiTypes.PlatformCore.Messaging.SignMessageReqBody = {
    didUrl: 'did:key:placeholder',
    payload: 'placeholder',
  };
  const res = await client.PlatformCore.Messaging.signMessage({ body });
  console.log(res);
};

export const verifyMessage = async () => {
  const body: ApiTypes.PlatformCore.Messaging.VerifyMessageReqBody = {
    jws: 'placeholder',
  };
  const res = await client.PlatformCore.Messaging.verifyMessage({ body });
  console.log(res);
};

export const encryptMessage = async () => {
  const body: ApiTypes.PlatformCore.Messaging.EncryptMessageReqBody = {
    senderDidUrl: 'did:key:sender_DID',
    recipientDidUrls: ['did:key:recipient_DID_1', 'did:key:recipient_DID_2'],
    payload: 'PLACEHOLDER',
  };
  const res = await client.PlatformCore.Messaging.encryptMessage({ body });
  console.log(res);
};

export const sendMessage = async () => {
  const body: ApiTypes.PlatformCore.Messaging.SendMessageReqBody = {
    to: 'did:key:recipient_DID',
    message: 'encrypted_message',
  };
  const res = await client.PlatformCore.Messaging.sendMessage({ body });
  console.log(res);
};

export const deleteMessage = async () => {
  const query: ApiTypes.PlatformCore.Messaging.DeleteMessageReqQuery = {
    inboxId: 'your-inbox-id',
    messageId: 'your-inbox-id',
  };
  const res = await client.PlatformCore.Messaging.deleteMessage({ query });
  console.log(res);
};

export const listInboxMessages = async () => {
  const query: ApiTypes.PlatformCore.Messaging.ListInboxMessagesReqQuery = {
    inboxId: 'your-inbox-id',
  };
  const res = await client.PlatformCore.Messaging.listInboxMessages({ query });
  console.log(res);
};
