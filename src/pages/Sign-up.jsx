import { Link } from "react-router-dom";
import "./Sign-up.css";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
<<<<<<< HEAD
    confirmpassword: "",
  });

  const [error, setError] = useState("");

  const handlechange = (e) => {
=======
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
>>>>>>> auth
    setError("");

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

<<<<<<< HEAD
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmpassword
    ) {
      setError("All fileds are required");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Password didn't match");
    }
=======
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // db logic

    console.log(formData);
>>>>>>> auth
  };

  return (
    <div className="signup_container">
      <h1>Sign-up</h1>
      <form onSubmit={handleSignUp} className="signup_form">
<<<<<<< HEAD
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="confirm password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handlechange}
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
=======
        <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>

      {error && <p className="error">{error}</p>}

>>>>>>> auth
      <p>
        Already have an account? <Link to={"/sign-in"}>Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
