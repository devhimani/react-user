import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { authContext } from "../store/authContext";

const Header = () => {
  const { currentUser } = useContext(authContext);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };
  return (
    <div className="header">
      <h1> Header-Icon</h1>
      <div>
        {currentUser ? (
          <>
            <p> {currentUser.name}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to={"/sign-in"}>
            <button>Signin</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
