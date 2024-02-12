import Product from "./Product";
// import data from "../../mockData/data";

const ProductListing = ({
  products,
  onDelete,
  onEdit,
  // cartItems,
  // setCartItems,
  onAddToCart,
}) => {
  console.log(products);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              product={product}
              onDelete={onDelete}
              onEdit={onEdit}
              // cartItems={cartItems}
              // setCartItems={setCartItems}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
