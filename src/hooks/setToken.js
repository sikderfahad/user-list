// Set token in Local storage
const setTokenLS = (token) => {
  const expiredTime = new Date().getTime() + 60 * 60 * 1000;
  localStorage.setItem("authToken", token);
  localStorage.setItem("tokenExpiry", expiredTime);
};

// Remove token from Local storage
const clearToken = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiry");
};

// Get auth token from Local storage
const getTokenLS = () => {
  const token = localStorage.getItem("authToken");
  const expiryTime = localStorage.getItem("tokenExpiry");
  return { token, expiryTime };
};

export { setTokenLS, clearToken, getTokenLS };
