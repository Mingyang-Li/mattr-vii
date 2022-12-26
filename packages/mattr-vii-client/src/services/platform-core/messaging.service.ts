import {
  CreateInboxReqBody,
  CreateInboxReqResponse,
  IMattrViiClient,
} from "mattr-vii-types";

const createInbox = async (
  auth: IMattrViiClient,
  args: CreateInboxReqBody
): Promise<CreateInboxReqResponse> => {
  const resp = await fetch(
    `https://${auth.tenantUrl}.vii.mattr.global/core/v1/messaging/inboxes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.authToken}`,
      },
      body: JSON.stringify(args),
    }
  );

  return await resp.json();
};

const listInboxs = async () => {
  return;
};

const retrieveInboxName = async () => {
  return;
};
const updateInbox = async () => {
  return;
};
const deleteInbox = async () => {
  return;
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
