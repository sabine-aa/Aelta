import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      Admin Dashboard © {new Date().getFullYear()}
    </footer>
  );
};

export default AdminFooter;
