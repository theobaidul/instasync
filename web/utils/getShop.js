export default function getStoreId(res) {
    const shop = res?.locals?.shopify?.session?.shop;
    return shop;
}
