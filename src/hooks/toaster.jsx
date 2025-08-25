import React, { createContext, useContext } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 1. Create context
const ToastContext = createContext();

// 2. Create provider component
export const ToastProvider = ({ children }) => {
  // Global toast handler
  const showToast = (message, type = "info") => {
    const toastFn = toast[type] || toast;
    toastFn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

// 3. Custom hook to use the context
export const useToast = () => useContext(ToastContext);
