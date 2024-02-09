import { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ product, onDelete }) => {
  let id = product._id;
  let title = product.title;
  let price = product.price;
  let quantity = product.quantity;

  const [editVisible, setEditVisible] = useState(false);

  const handleDelete = () => {
    console.log(id);
    onDelete(id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button
            className="edit"
            onClick={() => setEditVisible((prevState) => !prevState)}
          >
            Edit
          </button>
        </div>
        <button className="delete-button" onClick={handleDelete}>
          <span>X</span>
        </button>
      </div>
      {editVisible ? (
        <EditForm id={id} title={title} price={price} quantity={quantity} />
      ) : null}
    </li>
  );
};

export default Product;
