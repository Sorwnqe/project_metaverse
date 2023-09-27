'use client';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { Motion, TitleText } from '../components';

const Explore = () => (
  <section id="explore">
    <Motion variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto`}>
      <TitleText title={<>Our Main Features</>} textStyles="text-center" />
    </Motion>
  </section>
);

export default Explore;
