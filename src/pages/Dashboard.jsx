import { Link } from "react-router-dom";
import Header from "../components/Header";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/sign-in">SignIn</Link>
      <Link to="/sign-up">SignUp</Link>
      <h1>Hello Dashboard </h1>
    </div>
  );
};

export default Dashboard;
