import { Link } from "react-router-dom";
import "./Sign-up.css";
const SignUp = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/sign-in">SignIn</Link>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Sign-up</h1>
      <div className="signup">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="confirm password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
