import fetch from 'node-fetch';
import {
  Webhook,
  CreateWebhookArgs,
  GetWebhooksArgs,
} from '@/dto/platform-core/webhooks';

const createWebhook = async (args: CreateWebhookArgs): Promise<Webhook> => {
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

const getWebhooks = async (args: GetWebhooksArgs) => {
  let url = '';
  const pagination = args.query.pagination;
  switch (pagination) {
    case undefined:
      url = `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/webhooks`;
      break;
    default:
      const query = new URLSearchParams({
        limit: pagination.limit.toString(),
        cursor: pagination.cursor,
      });
      url = `https://${args.auth.tenantUrl}.vii.mattr.global/core/v1/webhooks?${query}`;
  }
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${args.auth.authToken}`,
    },
  });
  return await resp.json();
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
