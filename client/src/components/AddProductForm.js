const AddProductForm = () => {
  return (
    <>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name:</label>
          <input type="text" id="product-name" name="product-name" required />
        </div>
        <div className="input-group">
          <label for="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="input-group">
          <label for="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default AddProductForm;