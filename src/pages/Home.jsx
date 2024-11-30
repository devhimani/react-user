import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/sign-in">SignIn</Link>
      <Link to="/sign-up">SignUp</Link>
      <h1> Hello home </h1>
    </div>
  );
};

export default Home;
