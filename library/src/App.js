import "./App.css";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import QrResult from "./QrResult";
import Success from "./Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path: "/qr-result/:regNumber",
    element: <QrResult />,
    errorElement: <ErrorPage />, // Handle errors for this route
  },
  {
    path: "*",
    element: <ErrorPage />, // Fallback for 404 errors
  },
]);

function App() {
  return (
    /*  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </Router> */
    <RouterProvider router={router} />
  );
}
export default App;
