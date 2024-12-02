import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { authContext } from "../store/authContext";

const Header = () => {
  const { currentUser } = useContext(authContext);

  return (
    <div className="header">
      <h1> Header-Icon</h1>
      <div>
        {currentUser ? (
          <p>{currentUser.name}</p>
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
