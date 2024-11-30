import { Link } from "react-router-dom";
import "./Sign-in.css";
const SignIn = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/sign-up">SignUp</Link>
      <h1> Sign-in </h1>
      <div className="signin">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
