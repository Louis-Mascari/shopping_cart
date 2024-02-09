import ProductListing from "./ProductListing";
import AddForm from "./AddForm";

const Main = ({ products, onSubmit, onDelete }) => {
  return (
    <>
      <ProductListing products={products} onDelete={onDelete} />
      <AddForm onSubmit={onSubmit} />
    </>
  );
};

export default Main;
