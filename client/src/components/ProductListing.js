import Product from "./Product";
// import data from "../../mockData/data";

const ProductListing = ({ products }) => {
  console.log(products);

  return (
    <div class="product-listing">
      <h2>Products</h2>
      <ul class="product-list">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
