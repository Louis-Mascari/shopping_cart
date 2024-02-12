import axios from "axios";

export const getProducts = async () => {
  console.log("hello!!");
  const { data } = await axios.get("/api/products");
  return data;
};

export const addProduct = async (product) => {
  const { data } = await axios.post("/api/products", product);
  return data;
};

export const deleteProduct = async (id) => {
  console.log(id);
  await axios.delete(`/api/products/${id}`);
};

export const editProduct = async (product) => {
  const p = {
    title: product.title,
    price: product.price,
    quantity: product.quantity,
  };
  const { data } = await axios.put(`/api/products/${product._id}`, p);
  return data;
};

export const addToCart = async (obj) => {
  const { data } = await axios.post("/api/add-to-cart", obj);
  return data;
};

export const getCartItems = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};
