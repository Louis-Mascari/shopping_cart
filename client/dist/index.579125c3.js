// The starting point of the application
// This is where the root component of the application - App - is rendered to the DOM. 
// You can add new components to the /client/src/components folder and new test files to the /client/src/tests folder.
let badObj = {
    blah: 5
};
const App = ()=>{
    return React.createElement("div", {
        children: [
            React.createElement("header", {
                children: [
                    React.createElement("h1", null, "The Shop!"),
                    React.createElement("div", {
                        className: "cart",
                        children: [
                            React.createElement("h2", null, "Your Cart"),
                            React.createElement("p", null, "Your cart is empty"),
                            React.createElement("p", null, "Total: $0"),
                            React.createElement("button", {
                                className: "checkout",
                                disabled: true
                            }, "Checkout")
                        ]
                    })
                ]
            }),
            React.createElement("main", {
                children: [
                    React.createElement("div", {
                        className: "product-listing",
                        children: [
                            React.createElement("h2", null, "Products"),
                            React.createElement("ul", {
                                className: "product-list",
                                children: [
                                    React.createElement("li", {
                                        className: "product",
                                        children: [
                                            React.createElement("div", {
                                                className: "product-details",
                                                children: [
                                                    React.createElement("h3", null, "Amazon Kindle E-Reader"),
                                                    React.createElement("p", {
                                                        className: "price"
                                                    }, "$79.99"),
                                                    React.createElement("p", {
                                                        className: "quantity"
                                                    }, "5 left in stock"),
                                                    React.createElement("div", {
                                                        className: "actions product-actions",
                                                        children: [
                                                            React.createElement("button", {
                                                                className: "add-to-cart"
                                                            }, "Add to Cart"),
                                                            React.createElement("button", {
                                                                className: "edit"
                                                            }, "Edit")
                                                        ]
                                                    }),
                                                    React.createElement("button", {
                                                        className: "delete-button",
                                                        children: [
                                                            React.createElement("span", null, "X")
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
_c = App;
const root = document.getElementById("root");
// const h1 = React.createElement('h1', null, 'Hello');
ReactDOM.createRoot(root).render(React.createElement(App));
var _c;
$RefreshReg$(_c, "App");

//# sourceMappingURL=index.579125c3.js.map
