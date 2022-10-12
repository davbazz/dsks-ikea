import {createClient} from "contentful"
const useContentful = () =>{ 
   const client= createClient({ 
        space:"1wjru9t1jk4n",
        accessToken:"N63cGBSQ9rD9BPmNvYUmkdl6OF_NAwcH8eBc7ZCjgmg",
        host: "preview.contentful.com "
    });

    getAuthors = async() => { 
        try { 
           const entries= await client.getEntries({ 
                content_type: "authors",
                select: "fields",
                order: "fields.name",
               
            });
            const sanitizedEntries = entries.items.map((item) => { 
                const avatar = item.fields.avatar.fields;
            
            return { 
                ...item.fields,
                avatar
                  };
            });
            return sanitizedEntries
           }catch(error) { 
            console.log(`Error fetching authors: ${error}`);
           }
        };
    return(getAuthors);
};


export default useContentful