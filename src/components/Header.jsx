import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>

      <div>
        <Link to={"/sign-in"}>
          <button>SignIn</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
