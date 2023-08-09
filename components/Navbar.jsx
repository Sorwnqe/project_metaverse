'use client';

import { motion } from 'framer-motion';

import { App, Button } from 'antd';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const { message } = App.useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative flex justify-between header`}
    >
      <div className={`${styles.innerWidth} mx-auto flex items-center`}>
        <img
          src="/RAVE-logo.png"
          alt="search"
          className="w-[80px] object-contain logo"
        />
        <div className="hidden md:flex">
          <Button
            type="text"
            className="nav-item font-bold text-[16px] leading-[30.24px] text-white uppercase"
            onClick={() => message.info('Coming soon')}
          >
            Nfts
          </Button>
          <Button
            type="text"
            className="nav-item font-bold text-[16px] leading-[30.24px] text-white uppercase"
            onClick={() => message.info('Coming soon')}
          >
            Earn
          </Button>
          <Button
            type="text"
            className="nav-item font-bold text-[16px] leading-[30.24px] text-white uppercase"
            onClick={() => message.info('Coming soon')}
          >
            About
          </Button>
        </div>
      </div>

      <div className="md:flex gap-[20px] hidden">
        <Button
          shape="round"
          type="primary"
          className="bg-[#7774ff] hover:!bg-[#454489]"
          onClick={() => message.info('Coming soon')}
        >
          Connect Wallet
        </Button>
        <Button
          shape="round"
          type="primary"
          className="bg-[#7774ff] hover:!bg-[#454489]"
        >
          Network
        </Button>
      </div>

      <div className="flex md:hidden">
        <img
          src="/menu.svg"
          className="w-[24px] h-[24px] object-contain"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div
        className={`absolute top-[85px] flex-col w-full bg-black z-20 ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        <Button
          type="text"
          className="nav-item h-[42px] font-bold text-[16px] leading-[30.24px] text-white uppercase"
          onClick={() => message.info('Coming soon')}
        >
          Nfts
        </Button>
        <Button
          type="text"
          className="nav-item h-[42px] font-bold text-[16px] leading-[30.24px] text-white uppercase"
          onClick={() => message.info('Coming soon')}
        >
          Earn
        </Button>
        <Button
          type="text"
          className="nav-item h-[42px] font-bold text-[16px] leading-[30.24px] text-white uppercase"
          onClick={() => message.info('Coming soon')}
        >
          About
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
