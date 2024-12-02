import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
<<<<<<< HEAD
      <h1> Header-Icon</h1>
      <div>
        <Link to={"/sign-in"}>
          <button>Signin</button>
=======
      <h1>Header</h1>

      <div>
        <Link to={"/sign-in"}>
          <button>SignIn</button>
>>>>>>> auth
        </Link>
      </div>
    </div>
  );
};

export default Header;
