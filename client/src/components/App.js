import Header from "./Header";
import Main from "./Main";
import { getProducts, addProduct, deleteProduct } from "../services/api";
import { useState, useEffect } from "react";

const App = () => {
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

  const handleSubmit = async (newProduct, callback) => {
    try {
      const data = await addProduct(newProduct);
      if (callback) {
        callback();
      }
      setProducts((prevState) => prevState.concat(data));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteProduct(id);
      setProducts((prevState) =>
        prevState.filter((product) => product._id != id),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header />
      <Main
        products={products}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
