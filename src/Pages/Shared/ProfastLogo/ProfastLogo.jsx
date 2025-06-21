import React from 'react';
import logo from "../../../assets/logo.png";

const ProfastLogo = () => {
  return (
    <div className='flex items-center'>
      <img src={logo} alt="ProFastLogo" />
      <h2 className="text-3xl font-semibold mt-5 -ml-2">Profast</h2>
    </div>
  );
};

export default ProfastLogo;