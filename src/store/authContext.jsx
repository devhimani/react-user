import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    setCurrentUser(JSON.parse(data));
  }, []);

  return (
    <authContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
