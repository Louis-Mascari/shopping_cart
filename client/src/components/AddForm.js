import { useState } from "react";
import AddProductForm from "./AddProductForm";

const AddForm = ({ onSubmit }) => {
  //make 'Add Product' button toggle the 'AddProductForm'
  // need to track state representing visibility of appproductform
  // button always visible
  const [formVisible, setFormVisible] = useState(false);

  const handleCancel = () => {
    setFormVisible(false);
  };

  return (
    <div className="add-form">
      <p>
        <button
          className="add-product-button"
          onClick={() => setFormVisible((prevState) => !prevState)}
        >
          Add A Product
        </button>
      </p>
      {formVisible ? (
        <AddProductForm onSubmit={onSubmit} onCancel={handleCancel} />
      ) : null}
    </div>
  );
};

export default AddForm;
