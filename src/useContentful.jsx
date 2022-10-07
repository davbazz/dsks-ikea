import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: 'bf9doewl92di',
        accessToken: 'SwOEVmSrIMdvgsTNt1MCBwzj6tp3Y9ZACPYPMwEyRe8',
        host: 'preview.contentful.com'
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "cards",
                select: "fields"
            });

            console.log(entries)

            const sanitizedEntries = entries.items.map((item) => {
                const cards = item.fields.path;

                return {
                    ...item.fields,
                    cards
                }
            })

            return sanitizedEntries;
        } catch (error) {
            // console.log(`Error fetching products`);
        }
    };
    return { getProducts };
}

export default useContentful