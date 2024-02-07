const Product = ({ id, quantity, title, price }) => {
  return (
    <li class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{price}</p>
        <p class="quantity">{quantity} left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button">
          <span>X</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
