import React from "react";
const AuthLayout = ({ children ,className }) => {
  return (
    <main className="">
      <main className={`auth-bg pb-6 p-4 md:p-0 relative md:flex justify-center ${className}`}>
        {children}
      </main>
    </main>
  );
};

export default AuthLayout;
