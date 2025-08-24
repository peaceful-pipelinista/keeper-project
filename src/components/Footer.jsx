import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-100 p-4 text-center text-gray-500">
      <p>© {new Date().getFullYear()} Keeper App</p>
    </footer>
  );
};

export default Footer;
