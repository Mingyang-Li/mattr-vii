# 🧍 Platform Core - Webhooks
## Assume you already setup the SDK following the [main README doc](https://github.com/Mingyang-Li/mattr-vii#readme)
Example usage:

```ts
// Create a webhook
const body: ApiTypes.PlatformCore.Webhooks.CreateWebhook.CreateWebhookBody = {
  events: ['OidcIssuerCredentialIssued'],
  url: 'https://example.com',
};
const webhook = await client.PlatformCore.Webhooks.createWebhook({
  auth,
  body,
});
```

```ts
// Get a list of webhooks
const webhooks = await client.PlatformCore.Webhooks.getWebhooks({ auth });
```

```ts
// Get a webhook
```

```ts
// Update a webhook
```

```ts
// Remove a webhook
```

```ts
// Get a list of webhook JWKs
```