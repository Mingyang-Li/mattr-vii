import {
  CreateInboxArgs,
  CreateInboxReqResponse,
  DeleteInboxArgs,
  DeleteInboxReqResponse,
  ListInboxesArgs,
  ListInboxesReqResponse,
  RegisterDidWithInboxReqResponse,
  RegisterInboxWithDidArgs,
  RetrieveInboxNameArgs,
  RetrieveInboxNameReqResponse,
  UpdateInboxArgs,
  UpdateInboxReqResponse,
} from '@/dto';

const createInbox = async (
  args: CreateInboxArgs,
): Promise<CreateInboxReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${args.auth.authToken}`,
      },
      body: JSON.stringify(args.body),
    },
  );
  return await resp.json();
};

const listInboxs = async (
  args: ListInboxesArgs,
): Promise<ListInboxesReqResponse> => {
  let url: string;
  switch (args.query) {
    case undefined:
      url = `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes`;

    default:
      const query = new URLSearchParams({
        limit: args.query.limit.toString(),
        cursor: args.query.cursor,
      }).toString();
      url = `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes?${query}`;
  }
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${args.auth.authToken}`,
    },
  });
  return await resp.json();
};

const retrieveInboxName = async (
  args: RetrieveInboxNameArgs,
): Promise<RetrieveInboxNameReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${args.id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${args.auth.authToken}`,
      },
    },
  );
  return await resp.json();
};
const updateInbox = async (
  args: UpdateInboxArgs,
): Promise<UpdateInboxReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${args.args.id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${args.auth.authToken}`,
      },
      body: JSON.stringify(args.args.body),
    },
  );
  return await resp.json();
};
const deleteInbox = async (
  args: DeleteInboxArgs,
): Promise<DeleteInboxReqResponse | void> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${args.id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${args.auth.authToken}`,
      },
    },
  );
  return await resp.json();
};

const registerDidwithInbox = async (
  args: RegisterInboxWithDidArgs,
): Promise<RegisterDidWithInboxReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes/${args.body.did}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${args.auth.authToken}`,
      },
      body: JSON.stringify(args.body),
    },
  );
  return await resp.json();
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
