'use client';

import { motion } from 'framer-motion';

import { App } from 'antd';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => {
  const { message } = App.useApp();
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TitleText title={<>Makes provision forNFT bartering</>} />
          <TypingText
            textStyles="text-[20px] mt-[14px] text-[#b5b3b8]"
            title="Participate in acquiring NFTs by offering your NFTs, "
          />
          <TypingText
            textStyles="text-[20px] mt-[14px] text-[#b5b3b8]"
            title="ERC-20tokens, or both in exchange for your favorite "
          />
          <TypingText
            textStyles="text-[20px] mt-[14px] text-[#b5b3b8]"
            title="listed NFTs, and make your own listings."
          />

          <motion.button
            className="w-[140px] mt-[16px] py-2 px-3 rounded-lg gradient-btn text-white text-md"
            onClick={() => message.info('Coming soon')}
          >
            LIST NFT
          </motion.button>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
