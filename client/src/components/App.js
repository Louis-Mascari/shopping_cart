import Header from "./Header";
import Main from "./Main";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  addToCart,
  getCartItems,
} from "../services/api";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCartItems();
        console.log(data);
        setCartItems(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCartItems();
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

  const handleEdit = async (product, callback) => {
    try {
      const updatedProduct = await editProduct(product);
      let newProducts = products.map((p) => {
        if (p._id === updatedProduct._id) {
          return updatedProduct;
        } else {
          return p;
        }
      });

      if (callback) {
        callback();
      }

      setProducts(newProducts);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      const response = await addToCart({ productId: product._id });
      const newCartItem = response.item;

      const existingCartItem = cartItems.find((cartItem) => {
        return cartItem._id === product._id;
      });

      if (existingCartItem) {
        const newCartItems = cartItems.map((cartItem) => {
          if (cartItem._id === newCartItem._id) {
            return newCartItem;
          } else {
            return cartItem;
          }
        });
        setCartItems(newCartItems);
      } else {
        setCartItems(cartItems.concat(newCartItem));
      }

      const newProductItem = response.product;
      const newProducts = products.map((product) => {
        if (product._id === newProductItem._id) {
          return newProductItem;
        } else {
          return product;
        }
      });
      setProducts(newProducts);
    } catch (e) {
      console.error(e);
    }

    // if (quantity < 1) {
    //   console.log("Out of stock. Could not add to cart.");
    //   return;
    // }

    // const existingCartItem = cartItems.find((cartItem) => {
    //   return cartItem._id === id;
    // });

    // if (existingCartItem) {
    //   const newExistingCartItem = {
    //     ...existingCartItem,
    //     quantity: existingCartItem.quantity + 1,
    //   };

    //   const newCartItems = cartItems.map((cartItem) => {
    //     if (cartItem._id === newExistingCartItem._id) {
    //       return newExistingCartItem;
    //     } else {
    //       return cartItem;
    //     }
    //   });

    //   console.log("here");
    //   setCartItems(newCartItems);
    // } else {
    //   console.log("over here");
    //   const newCartItem = { ...product, quantity: 1 };
    //   console.log(newCartItem);
    //   const newCartItems = cartItems.concat(newCartItem);
    //   console.log(newCartItems);
    //   setCartItems(newCartItems);
    // }
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <Main
        products={products}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        onEdit={handleEdit}
        // cartItems={cartItems}
        // setCartItems={setCartItems}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
