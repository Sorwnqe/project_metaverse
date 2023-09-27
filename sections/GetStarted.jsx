'use client';

import { motion } from 'framer-motion';

import { App } from 'antd';
import styles from '../styles';
import { Motion, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => {
  const { message } = App.useApp();
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <Motion variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
        <Motion variants={fadeIn('up', 'tween', 0.2, 1)} className={`flex-1 ${styles.flexCenter}`}>
          <img src="/get-started.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
        </Motion>
        <Motion variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
          <TitleText title={<>Connect your crypto Wallets</>} />
          <TypingText title="We supports a good number of popular 721 and ERC-20 crypto wallets." textStyles="text-[20px] my-[16px]" />
          <motion.button className="w-[200px] py-3 px-5 rounded-lg gradient-btn text-white text-lg" onClick={() => message.info('Coming soon')}>
            Connect Wallet
          </motion.button>
        </Motion>
      </Motion>
    </section>
  );
};

export default GetStarted;
