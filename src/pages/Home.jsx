// import { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header";
import { useEffect } from "react";
// import { authContext } from "../store/authContext";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleDelete = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setCounter(5);
  }, []);

  useEffect(() => {
    console.log("update");
  }, []);

  return (
    <div>
      <Header />
      <h1> Hello home </h1>
      <h2> Counter</h2>
      <button onClick={handleAdd}>+</button>
      {counter}
      <button onClick={handleDelete}>-</button>
      <br />
      <button onClick={() => setCounter(counter + 5)}>Increase by 5</button>
    </div>
  );
};

export default Home;
