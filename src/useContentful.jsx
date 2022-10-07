import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: 'k4p7giyt3gym',
        accessToken: 'A2l-8q_iRr0azyFphHCejAOn6nNCKMWp25vVgBELmaA',
        host: 'preview.contentful.com'
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "productDsksLight",
                select: "fields"
            });

            // console.log(entries)

            const sanitizedEntries = entries.items.map((item) => {
                const productDsksLight = item.fields.image.fields;

                return {
                    ...item.fields,
                    productDsksLight
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