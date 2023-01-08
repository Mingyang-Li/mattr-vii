import fetch from 'node-fetch';
import {
  CreateWebhookArgs,
  CreateWebhookReqResponse,
} from '@/dto/platform-core/webhooks/create-webhook';

const createWebhook = async (
  args: CreateWebhookArgs,
): Promise<CreateWebhookReqResponse> => {
  const resp = await fetch(
    `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/webhooks`,
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

const getWebhooks = () => {
  return;
};

const getWebhook = () => {
  return;
};

const updateWebhook = () => {
  return;
};

const removeWebhook = () => {
  return;
};

const getWebhookJwks = () => {
  return;
};

export {
  createWebhook,
  getWebhooks,
  getWebhook,
  updateWebhook,
  removeWebhook,
  getWebhookJwks,
};
