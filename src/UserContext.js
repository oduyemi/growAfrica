import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });


  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("https://grow-africa-api.vercel.app/send/admin/signin", { email, password });
  
      if (response.status === 200) {
        console.log("Success:", response.data);
        setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setFlashMessage({
          type: "success",
          message: `Login Successful. Welcome Back ${response.data.user.fname}`,
        });
  
        setTimeout(() => {
          window.location.href = "/admin";
        }, 1000);
      } else if (response.status === 400) {
        console.log("Error:", response.data);
        setFlashMessage({ type: "error", message: "All fields are required!" });
      } else {
        console.error("Error:", response.data);
        setFlashMessage({ type: "error", message: "An unexpected error occurred. Please try again later." });
      }
    } catch (error) {
      console.error("Axios Error:", error);
  
      if (error.response) {
        console.log("Response Data:", error.response.data);
        setFlashMessage({ type: "error", message: error.response.data.detail || error.response.data.message });
      } else if (error.request) {
        console.error("Request Error:", error.request);
        setFlashMessage({ type: "error", message: "No response received from the server. Please try again later." });
      }
    }
  };
  
    
    const handleSignout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      window.location.href = "/admin/signin";
    };
  
    

  return (
    <UserContext.Provider value={{ user, setUser, flashMessage, handleLogin, handleSignout }}>
      {children}
    </UserContext.Provider>
  );
}; 