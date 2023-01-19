import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> }, //path: ""
        { path: "products", element: <ProductsPage /> },
        { path: "products/:productId", element: <ProductDetailPage /> },
        // { path: ":productId", element: <ProductDetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
