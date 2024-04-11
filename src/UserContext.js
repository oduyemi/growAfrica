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

  // LOGIN VALIDATION
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("https://grow-africa-api.vercel.app/send/admin/signin", { email, password });
  
      if (response.status === 200 && response.data.status === "success") {
        console.log("Success:", response.data);
        const { email, token } = response.data;
  
        // Store user data and token in localStorage
        localStorage.setItem("user", JSON.stringify({ adminID, fname, lname, email, phone }));
        localStorage.setItem("token", token);
  
        // Set user data in context
        setUser({ 
          adminID: response.data.adminID,
          fname: response.data.fname,
          lname: response.data.lname,
          email: response.data.email,
          phone: response.data.phone
        });
  
        setFlashMessage({
          type: "success",
          message: "Login Successful. Welcome Back!",
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
      console.error("Login Error:", error);
      setFlashMessage({ type: "error", message: "Login failed. Please try again later." });
    }
  };
  

  // LOGOUT 
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/admin/signin";
  };

  return (
    <UserContext.Provider value={{ user, setUser, flashMessage, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};