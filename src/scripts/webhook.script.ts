import { ApiTypes } from '@/index';
import { client } from '@/util/mattr-client';

export const createWebhook = async () => {
  const body: ApiTypes.PlatformCore.Webhooks.CreateWebhookBody = {
    events: ['OidcIssuerCredentialIssued'],
    url: 'https://example.com',
  };
  const webhook = await client.PlatformCore.Webhooks.createWebhook({ body });
  console.log(webhook);
};

export const getWebhooks = async () => {
  const webhooks = await client.PlatformCore.Webhooks.getWebhooks();
  console.log(webhooks);
};
