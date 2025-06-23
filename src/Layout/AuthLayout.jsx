import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="bg-base-200 ">
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;