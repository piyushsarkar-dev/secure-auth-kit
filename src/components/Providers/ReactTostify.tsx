"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const ReactTostify = () => {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1500}
      theme={theme === "dark" ? "dark" : "light"}></ToastContainer>
  );
};

export default ReactTostify;
