import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Product from "./components/Product";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/:productId", element: <Product /> },
]);

function App() {
  return (
    <div>
      <Header />
      <ContactUs />
      <RouterProvider router={router} />
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
