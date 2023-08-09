'use client';

import { motion } from 'framer-motion';
import { Col, Row } from 'antd';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pt-[60px] relative bg-black text-white`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto`}>
      <Row gutter={[20, 20]}>
        <Col md={12} xs={24} lg={6}>
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[#7774ff] text-[18px] font-bold">Info</h4>

            <a href="#top">Rave Book</a>
            <a href="#top">Teams of service</a>
            <a href="#top">Audit Report</a>
            <a href="#top">Privacy policy</a>
          </div>
        </Col>
        <Col md={12} xs={24} lg={6}>
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[#7774ff] text-[18px] font-bold">Company</h4>

            <a href="#top">Team</a>
            <a href="#top">LinkedIn</a>
          </div>
        </Col>

        <Col md={12} xs={24} lg={6}>
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[#7774ff] text-[18px] font-bold">Account</h4>

            <a href="#top">Profile</a>
            <a href="#top">My NFTs</a>
            <a href="#top">My Collections</a>
          </div>
        </Col>
        <Col md={12} xs={24} lg={6}>
          <div className="gap-4">
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
            <div className="mt-[20px] font-bold">
              <h4 className="text-[#7774ff] text-[18px]">Contact us</h4>
              <div className="mt-[4px]">main@contact.com</div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="text-center pt-[60px] pb-[30px]">
        © Copyright 2023 - RAVE
      </div>
    </div>
  </motion.footer>
);

export default Footer;
