import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log(isAuthenticated, "Hello", user);
  return (
    <nav className="navContainer">
      <img
        src="https://salesblink.io/images/branding/logo-dark.png"
        alt="logo"
        width={300}
        height={70}
      />
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/CreateBlog">Create Blog</Link>
        </li>
      </ul>
      {!isAuthenticated ? (
        <button className="button-7" onClick={() => loginWithRedirect()}>
          Login
        </button>
      ) : (
        <button
          className="button-7"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
