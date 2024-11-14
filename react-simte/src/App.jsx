import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import TestPage from "./routes/TestPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/test-page",
    element: <TestPage />
  }
]);

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
