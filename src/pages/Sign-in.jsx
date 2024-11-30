import { Link } from "react-router-dom";
import "./Sign-in.css";

const SignIn = () => {
  return (
    <div className="signin_container">
      <h1> Sign-in </h1>
      <form className="signin_form">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
