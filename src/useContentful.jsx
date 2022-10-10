import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: import.meta.env.VITE_spaceID,
        accessToken: import.meta.env.VITE_accessToken,
        host: 'preview.contentful.com'
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "items",
                select: "fields"
            });
            const sanitizedEntries = entries.items.map((item) => {
                return {
                    ...item.fields,
                }
            })

            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching products`);
        }
    };
    return { getProducts };
}

export default useContentful