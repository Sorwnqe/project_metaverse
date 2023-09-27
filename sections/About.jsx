'use client';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { Motion } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="z-0 gradient-02" />
    <Motion variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto `}>
      <div className="flex text-[#b5b3b8] justify-center flex-wrap gap-[20px]">
        <div className={`${styles.flexCenter} gap-[20px] w-1/2 md:w-auto`}>
          <div className="md:text-[50px] font-bold text-[42px]">45K</div>
          <div className="flex flex-col md:text-[18px] gap-[8px] text-[16px]">
            Active
            <div>Users</div>
          </div>
        </div>
        <div className={`${styles.flexCenter} gap-[20px] w-1/2 md:w-auto`}>
          <div className="md:text-[50px] font-bold text-[42px]">60K</div>
          <div className="flex flex-col md:text-[18px] gap-[8px] text-[16px]">
            Nft
            <div>Artworks</div>
          </div>
        </div>
        <div className={`${styles.flexCenter} gap-[20px] w-1/2 md:w-auto`}>
          <div className="md:text-[50px] font-bold text-[42px]">23K</div>
          <div className="flex flex-col md:text-[18px] gap-[8px] text-[16px]">
            Active
            <div>Users</div>
          </div>
        </div>
        <div className={`${styles.flexCenter} gap-[20px] w-1/2 md:w-auto`}>
          <div className="md:text-[50px] font-bold text-[42px]">15K</div>
          <div className="flex flex-col md:text-[18px] gap-[8px] text-[16px]">
            Total
            <div>Products</div>
          </div>
        </div>
      </div>
    </Motion>
  </section>
);

export default About;
