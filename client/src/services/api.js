import axios from "axios";

export const getProducts = async () => {
  console.log("hello!!");
  const { data } = await axios.get("/api/products");
  return data;
};
