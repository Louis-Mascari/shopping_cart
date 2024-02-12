import ProductListing from "./ProductListing";
import AddForm from "./AddForm";

const Main = ({
  products,
  onSubmit,
  onDelete,
  onEdit,
  // cartItems,
  // setCartItems,
  onAddToCart,
}) => {
  return (
    <>
      <ProductListing
        products={products}
        onDelete={onDelete}
        onEdit={onEdit}
        // cartItems={cartItems}
        // setCartItems={setCartItems}
        onAddToCart={onAddToCart}
      />
      <AddForm onSubmit={onSubmit} />
    </>
  );
};

export default Main;
