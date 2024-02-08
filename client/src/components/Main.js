import ProductListing from "./ProductListing";
import AddForm from "./AddForm";
import { getProducts } from "../services/api";
import { useState, useEffect } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data);
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <ProductListing products={products} />
      <AddForm />
    </>
  );
};

export default Main;
