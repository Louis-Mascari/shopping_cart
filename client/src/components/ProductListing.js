import Product from "./Product";
import data from "../../mockData/data";

const ProductListing = () => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      <ul class="product-list">
        {data.map((product) => {
          console.log(product);
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
