import React, { useEffect, createContext, useState } from "react";
import { createClient } from "contentful";

export const CMSContext = createContext();

const CMSContextProvider = (props) => {
  const [getCategories, setCategories] = useState([]);
  const [getProducts, setProducts] = useState([]);
  const [getClient, setClient] = useState();

  useEffect(() => {
    const client = createClient({
      space: "bf9doewl92di",
      accessToken: "SwOEVmSrIMdvgsTNt1MCBwzj6tp3Y9ZACPYPMwEyRe8",
      host: "preview.contentful.com"
    });
    setClient(client);
  }, []);

  useEffect(() => {
    if (getClient) {
      const goAsync = async () => {
        const _categories = await fetchFromCMS("category", getClient);
        setCategories(_categories);
        const _products = await fetchFromCMS("product", getClient);
        setProducts(_products);
      };
      goAsync();
    }
  }, [getClient]);

  return (
    <CMSContext.Provider
      value={{
        getCategories,
        getProducts
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
      content_type: "category", // <<<<< dynamically get content based on type
      select: "fields"
    });
    return entries;
  } catch (error) {
    console.log(error)
    throw new Error ("could get content :O type = " + contentType)
  }
}
