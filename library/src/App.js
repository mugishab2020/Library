import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import QrResult from "./QrResult";
import Success from "./Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />, // Handle errors for this route
  },
  {
    path: "/success",
    element: <Success />,
    errorElement: <ErrorPage />, // Handle errors for this route
  },
  {
    path: "/qr-result/:refId",
    element: <QrResult />,
    errorElement: <ErrorPage />, // Handle errors for this route
  },
  {
    path: "*",
    element: <ErrorPage />, // Fallback for 404 errors
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    /*  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </Router> */
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
