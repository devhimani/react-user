import { useState } from "react";
import Header from "../components/Header";
import { useEffect } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleDel = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setCounter(5);
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [counter]);

  return (
    <div>
      <Header />
      <h1> Counter </h1>

      <button onClick={handleAdd}>+</button>
      {counter}
      <button onClick={handleDel}>-</button>

      <br />

      <button onClick={() => setCounter(counter + 5)}>Increase by 5</button>
    </div>
  );
};

export default Home;
