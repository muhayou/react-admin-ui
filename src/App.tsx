import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/product",
          element: <Product />
        },
        {
          path: "/users",
          element: <Users />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
