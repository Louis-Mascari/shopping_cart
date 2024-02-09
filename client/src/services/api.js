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
