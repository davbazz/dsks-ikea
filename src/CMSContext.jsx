import React, { useEffect, createContext, useState } from "react";
import { createClient } from "contentful";

export const CMSContext = createContext();

const CMSContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_spaceID,
      accessToken: import.meta.env.VITE_accessToken,
      host: "preview.contentful.com"
    });
    client.getEntries({
      content_type: 'products',// <<<<< dynamically get content based on type
      select: "fields"
    }).then(response => setProducts(response.items))
    client.getEntries({
      /*CATEGORIES*/content_type: 'cards',// <<<<< dynamically get content based on type
      select: "fields"
    }).then(response => setCategories(response.items))
  }, []);

  useEffect(()=>{
    console.log({categories, products})
  },[categories, products])

  return (
    <CMSContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
      }}
    >
      {props.children}
    </CMSContext.Provider>
  );
};

export default CMSContextProvider;

async function fetchFromCMS(contentType, client) {
  try {
    const entries = await client.getEntries({
      content_type: contentType, // <<<<< dynamically get content based on type
      select: "fields"
    });
    return entries;
  } catch (error) {
    console.log(error)
    throw new Error("could get content :O type = " + contentType)
  }
}

