'use client';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, Motion, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="z-0 gradient-02" />
    <Motion variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TitleText title={<>Governance</>} />
      <TypingText textStyles="md:text-[20px] text-[18px] mt-[14px] text-[#b5b3b8]" title="Governance liquidity for otherwise illiquid assets via multi-" />
      <TypingText textStyles="md:text-[20px] text-[16px] mt-[14px] text-[#b5b3b8]" title="asset barter on the most secure NFT trading Open." />

      <div className="mt-[50px] flex gap-[30px] lg:flex-row flex-col">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </Motion>
  </section>
);

export default Insights;
