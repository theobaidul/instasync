export default async function promiseHandler(promise) {
    try {
        const data = await promise;
        return [data, null]; //[data, error]
    } catch (error) {
        return [null, error]; //[data, error]
    }
}
