import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";

function RouteLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="AddBlog">Add Blog</NavLink>
          <NavLink to="Reviews">Reviews</NavLink>
          <NavLink to="Login">Log In</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default RouteLayout;
