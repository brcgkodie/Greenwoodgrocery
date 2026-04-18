const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

export const isShopifyConfigured = !!(domain && token);

let clientPromise = null;

function getClient() {
  if (!isShopifyConfigured) return Promise.resolve(null);
  if (!clientPromise) {
    clientPromise = import("shopify-buy").then((module) => {
      const Client = module.default || module;
      return Client.buildClient({ domain, storefrontAccessToken: token });
    });
  }
  return clientPromise;
}

export async function fetchAllProducts() {
  const client = await getClient();
  if (!client) return [];
  return client.product.fetchAll(250);
}

export async function createCheckout() {
  const client = await getClient();
  if (!client) return null;
  return client.checkout.create();
}

export async function fetchCheckout(checkoutId) {
  const client = await getClient();
  if (!client) return null;
  return client.checkout.fetch(checkoutId);
}

export async function addLineItem(checkoutId, variantId, quantity = 1) {
  const client = await getClient();
  if (!client) return null;
  return client.checkout.addLineItems(checkoutId, [{ variantId, quantity }]);
}

export async function removeLineItem(checkoutId, lineItemId) {
  const client = await getClient();
  if (!client) return null;
  return client.checkout.removeLineItems(checkoutId, [lineItemId]);
}

export async function updateLineItem(checkoutId, lineItemId, quantity) {
  const client = await getClient();
  if (!client) return null;
  return client.checkout.updateLineItems(checkoutId, [{ id: lineItemId, quantity }]);
}
