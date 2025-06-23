import React from 'react';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router';

const ProfastLogo = () => {
  return (
    <Link to='/'>
      <div className="flex items-center">
        <img src={logo} alt="ProFastLogo" />
        <h2 className="text-3xl font-semibold mt-5 -ml-2">Profast</h2>
      </div>
    </Link>
  );
};

export default ProfastLogo;