/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { getProducts, addProduct } from "../services/api";
import userEvent from "@testing-library/user-event";
import App from "./App";
import AddProductForm from "./AddProductForm";

jest.mock("../services/api.js");

afterEach(() => {
  jest.resetAllMocks();
});

const mockProductsData = [
  {
    _id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
];

test("products contain mock product", async () => {
  getProducts.mockResolvedValue(mockProductsData);
  render(<App />);

  const productHeading = await screen.findByRole("heading", {
    level: 3,
    name: "Amazon Kindle E-reader",
  });

  expect(productHeading).toBeInTheDocument();
});

test("deleting object removes from screen", async () => {
  getProducts.mockResolvedValue(mockProductsData);
  render(<App />);

  const productHeading = await screen.findByRole("heading", {
    level: 3,
    name: "Amazon Kindle E-reader",
  });

  const button = await screen.findByRole("button", {
    name: /x/i,
  });
  const user = userEvent.setup();
  await user.click(button);

  expect(productHeading).not.toBeInTheDocument();
});

// test("adding product renders new product to screen", async () => {
//   const user = userEvent.setup();
//   render(<AddProductForm />);
//   const input = screen.getByLabelText(/Product Name:/i).nextElementSibling;
//   await user.type(input, "Fake");
// });
