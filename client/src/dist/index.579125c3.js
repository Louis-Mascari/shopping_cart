// The starting point of the application
// This is where the root component of the application - App - is rendered to the DOM. 
// You can add new components to the /client/src/components folder and new test files to the /client/src/tests folder.
const App = ()=>{
    return React.createElement("header", {
        children: []
    });
};
const root = document.getElementById("root");
// const h1 = React.createElement('h1', null, 'Hello');
ReactDOM.createRoot(root).render(React.createElement(App));

//# sourceMappingURL=index.579125c3.js.map
