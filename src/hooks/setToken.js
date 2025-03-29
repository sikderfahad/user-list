const setToken = (token) => {
  const expiredTime = new Date().getTime() + 60 * 1000;
  localStorage.setItem("authToken", token);
  localStorage.setItem("tokenExpiry", expiredTime);
};

const clearToken = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiry");
};

export { setToken, clearToken };
