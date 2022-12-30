import {
  CreateInboxReqBody,
  CreateInboxReqResponse,
  DeleteInboxReqResponse,
  IAuth,
  ListInboxesReqQuery,
  ListInboxesReqResponse,
  RetrieveInboxNameReqResponse,
  UpdateInboxReqResponse,
  UpdateInbxReqArgs,
} from '@/dto';

const createInbox = async (
  auth: IAuth,
  args: CreateInboxReqBody,
): Promise<CreateInboxReqResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.authToken}`,
      },
      body: JSON.stringify(args),
    },
  );
  return await resp.json();
};

const listInboxs = async (
  auth: IAuth,
  queryArgs: ListInboxesReqQuery,
): Promise<ListInboxesReqResponse> => {
  let url: string;
  switch (queryArgs) {
    case undefined:
      url = `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes`;

    default:
      const query = new URLSearchParams({
        limit: queryArgs.limit.toString(),
        cursor: queryArgs.cursor,
      }).toString();
      url = `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes?${query}`;
  }
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth.authToken}`,
    },
  });
  return await resp.json();
};

const retrieveInboxName = async (
  auth: IAuth,
  id: string,
): Promise<RetrieveInboxNameReqResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.authToken}`,
      },
    },
  );
  return await resp.json();
};
const updateInbox = async (
  auth: IAuth,
  args: UpdateInbxReqArgs,
): Promise<UpdateInboxReqResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${args.id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${auth.authToken}`,
      },
      body: JSON.stringify(args.body),
    },
  );
  return await resp.json();
};
const deleteInbox = async (
  auth: IAuth,
  id: string,
): Promise<DeleteInboxReqResponse | void> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.authToken}`,
      },
    },
  );
  return await resp.json();
};

const registerDidwithInbox = async () => {
  return;
};
const listInboxDids = async () => {
  return;
};

const unregisterInboxDid = async () => {
  return;
};

const listInboxMessages = async () => {
  return;
};

const retrieveMessage = async () => {
  return;
};

const deleteMessage = async () => {
  return;
};

const signMessage = async () => {
  return;
};

const verifyMessage = async () => {
  return;
};

const encryptMessage = async () => {
  return;
};

const decryptMessage = async () => {
  return;
};

const sendMessage = async () => {
  return;
};

export {
  createInbox,
  listInboxs,
  retrieveInboxName,
  updateInbox,
  deleteInbox,
  registerDidwithInbox,
  listInboxDids,
  unregisterInboxDid,
  listInboxMessages,
  retrieveMessage,
  deleteMessage,
  signMessage,
  verifyMessage,
  encryptMessage,
  decryptMessage,
  sendMessage,
};
