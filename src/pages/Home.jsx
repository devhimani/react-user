import { useContext } from "react";
import Header from "../components/Header";
import { authContext } from "../store/authContext";
const Home = () => {
  const data = useContext(authContext);
  console.log(data);
  return (
    <div>
      <Header />
      <h1> Hello home </h1>
    </div>
  );
};

export default Home;
