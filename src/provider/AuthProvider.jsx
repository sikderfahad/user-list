import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [expiryTime, setExpiryTime] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
  }, []);

  useEffect(() => {
    setExpiryTime(Number(localStorage.getItem("tokenExpiry")));
  }, []);

  const values = {
    user,
    setUser,
    loading,
    setLoading,
    token,
    expiryTime,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
