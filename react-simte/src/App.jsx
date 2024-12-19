import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/layout";
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

const App = () => {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
};

export default App;
