export const isLoggedIn = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  return loggedIn === "true";
};
