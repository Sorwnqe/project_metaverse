'use client';

import { motion } from 'framer-motion';

import { App } from 'antd';
import styles from '../styles';
import { Motion, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => {
  const { message } = App.useApp();
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <Motion variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
        <Motion variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-[0.95] flex justify-center flex-col">
          <TitleText title={<>Makes provision forNFT bartering</>} />
          <TypingText textStyles="md:text-[20px] text-[18px] mt-[14px]text-[#b5b3b8] w-full md:w-[70%] py-3 leading-[2]" title="Participate in acquiring NFTs by offering your NFTs, ERC-20tokens, or both in exchange for your favorite listed NFTs, and make your own listings." />

          <motion.button className="w-[140px] mt-[16px] py-2 px-3 rounded-lg gradient-btn text-white text-md" onClick={() => message.info('Coming soon')}>
            LIST NFT
          </motion.button>
        </Motion>

        <Motion variants={fadeIn('up', 'tween', 0.2, 1)} className={`flex-1 ${styles.flexCenter}`}>
          <img src="/whats-new.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
        </Motion>
      </Motion>
    </section>
  );
};

export default WhatsNew;
