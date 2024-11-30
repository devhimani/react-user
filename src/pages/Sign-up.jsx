import { Link } from "react-router-dom";
import "./Sign-up.css";
const SignUp = () => {
  return (
    <div className="signup_container">
      <h1>Sign-up</h1>
      <form className="signup_form">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="confirm password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to={"/sign-in"}>Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
