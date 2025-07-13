//  The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
// 🔐 Save token with 1-hour expiration
function setAuthToken(token) {
  const expiryTime = Date.now() + (60 * 60 * 1000); 
  const authData = {
    token: token,
    expiresAt: expiryTime
  };
  localStorage.setItem("authToken", JSON.stringify(authData));
}


function isAuthTokenValid() {
  const authData = JSON.parse(localStorage.getItem("authToken"));
  if (!authData) return false;

  return Date.now() < authData.expiresAt;
}


function clearAuthToken() {
  localStorage.removeItem("authToken");
}

setAuthToken("superSecret123");

if (isAuthTokenValid()) {
  console.log("Token is valid!");
} else {
  console.log("Token is expired or missing.");
}


