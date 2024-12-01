import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1> Header-Icon</h1>
      <div>
        <Link to="./sign-in">
          <button>Signin</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
