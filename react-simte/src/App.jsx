import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestGate from "./routes/TestGate";
import Home from "./routes/Home";
import TestPage from "./routes/TestPage";
import TestResult from "./routes/TestResult";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/gate/:id",
    element: <TestGate />
  },
  {
    path: "/test/:id",
    element: <TestPage />
  },
  {
    path: "/test-result",
    element: <TestResult />
  }
]);

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
