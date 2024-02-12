import { useState } from "react";
import api from "../services/api";

const EditForm = ({
  id,
  title,
  price,
  quantity,
  onEdit,
  onCancel,
  setEditVisible,
}) => {
  const [productName, setProductName] = useState(title);
  const [productPrice, setProductPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { id, productName, productPrice, productQuantity };
    console.log(updatedProduct);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const editedProduct = {
      _id: id,
      title: productName,
      price: productPrice,
      quantity: productQuantity,
    };

    onEdit(editedProduct, reset);
    setEditVisible(false);
  };

  const reset = () => {
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={handleEdit}>
            Update
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
