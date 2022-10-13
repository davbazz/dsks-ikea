import React, { useEffect, createContext, useState } from "react";
import { createClient } from "contentful";

export const CMSContext = createContext();

const CMSContextProvider = (props) => {
  const [getCategories, setCategories] = useState([]);
  const [getProducts, setProducts] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "bf9doewl92di",
      accessToken: "SwOEVmSrIMdvgsTNt1MCBwzj6tp3Y9ZACPYPMwEyRe8",
      host: "preview.contentful.com"
    });
    client.getEntries({
      content_type: 'cards', // <<<<< dynamically get content based on type
      select: "fields"
    }).then(response => setCards(response.items))
  }, []);


  return (
    <CMSContext.Provider
      value={{
        test: true,
        getCategories,
        setCategories,
        getProducts,
        setProducts,
        cards,
        setCards
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
