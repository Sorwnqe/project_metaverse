'use client';

import { motion } from 'framer-motion';

import { App } from 'antd';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { Motion } from '../components';

const Hero = () => {
  const { message } = App.useApp();

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <Motion variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto grid md:grid-cols-2 grid-cols-1 gap-[30px]`}>
        <div
          className="relative z-10 bg-[length:300.8px_75.2px] md:bg-[length:376px_94px]"
          style={{
            backgroundImage: 'url(/RAVE_bg.png)',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="pr-[20px] pt-[48px]">
            <Motion variants={textVariant(1.1)} className={styles.heroHeading}>
              The Future of Digital Art:
            </Motion>
            <Motion variants={textVariant(1.2)} className="">
              <h1 className={styles.heroHeading}>The Fusion of NFTs and AI</h1>
            </Motion>
            <motion.button className="px-8 py-3 bg-[#7774ff] rounded-full text-white mt-[60px] font-bold cursor-pointer" onClick={() => message.info('Coming soon')}>
              Buy $RAVE
            </motion.button>

            <Motion className="text-lg font-bold text-white pt-[56px]">CURRENT USERS</Motion>
            <Motion className="md:text-[42px] text-[30px] font-bold text-[#7774ff] pt-[56px] flex md:gap-[20px] gap-[15px]">
              {'001517'.split('').map((f, index) => (
                <span key={f + index.toString()} className="flex items-center justify-center md:w-[72px] md:h-[80px] w-[42px] h-[48px] border border-[#7774ff] md:rounded-xl rounded-md">
                  {f}
                </span>
              ))}
            </Motion>
          </div>
        </div>

        <Motion variants={fadeIn('down', 'spring', 0.2, 1)} className="relative mt-[80px] hidden md:block">
          <img src="/hero-t.png" alt="hero_cover" className="absolute top-[-33px] left-[39.4%] z-[12] hero-jump" />
          <img src="/hero-r.png" alt="hero_cover" className="h-[420px] object-contain z-10 relative" />
        </Motion>
      </Motion>
    </section>
  );
};

export default Hero;
