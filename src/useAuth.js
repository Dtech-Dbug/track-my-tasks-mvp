import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and passcode match
    if (email === "john@doe" && passcode === "1111") {
      localStorage.setItem("authToken", "dummy-token"); // Store dummy token in localStorage
      toast.success("Successfully logged in!");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Return the state and functions
  return {
    isAuthenticated,
    email,
    setEmail,
    passcode,
    setPasscode,
    handleSubmit
  };
};
