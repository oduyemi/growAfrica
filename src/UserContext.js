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
      
      if (response.status === 200 && response.data.message === "success") {
        console.log("Success:", response.data);
        const { adminID, fname, lname, email, phone, token } = response.data;

        // Store user data and token in localStorage
        localStorage.setItem("user", JSON.stringify({ adminID, fname, lname, email, phone }));
        localStorage.setItem("token", token);

        setUser({ adminID, fname, lname, email, phone });

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
