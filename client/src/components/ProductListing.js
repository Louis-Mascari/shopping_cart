import Product from "./Product";
import data from "../../mockData/data";

const ProductListing = () => {
  console.log("this is data", data);

  return (
    <div class="product-listing">
      <h2>Products</h2>
      <ul class="product-list">
        {data.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
