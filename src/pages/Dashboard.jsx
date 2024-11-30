import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/sign-in">SignIn</Link>
      <Link to="/sign-up">SignUp</Link>
      <h1>Hello Dashboard </h1>
    </div>
  );
};

export default Dashboard;
