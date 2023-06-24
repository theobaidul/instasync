export default async function jsonParser(request) {
    try {
        const response = await request;
        const data = await response.json();
        return { data };
    } catch (error) {
        return { error };
    }
}
