import React from 'react';
import logoSvg from '../assets/logo.svg';
import coinSvg from '../assets/coin.svg';
import userSvg from '../assets/user.svg';

interface NavbarProps {
  coinAmount: number;
}

const Navbar: React.FC<NavbarProps> = ({ coinAmount }) => {
  return (
    <nav className="custom-container flex justify-between items-center shadow-container">
      <div className="flex items-center">
        <img src={logoSvg} alt="Logo"/>
      </div>

      <div className="gap-container-pad! flex items-center">
        <div className="custom-container flex items-center gap-2.75 p-2.75!">
            <img src={coinSvg} alt="Coin" />
            <span className="text-h2-m lg:text-h2-d font-medium">{coinAmount}</span>
        </div>
        <img src={userSvg} alt="User" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
