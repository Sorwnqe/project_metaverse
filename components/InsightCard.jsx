'use client';

import { fadeIn } from '../utils/motion';
import Motion from './motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <Motion variants={fadeIn('up', 'spring', index * 0.5, 1)} className="flex-auto md:px-[60px] md:pt-[100px] pt-[60px] px-[40px] bg-[#ffffff0a] rounded-[32px] cursor-pointer md:min-h-[600px]" style={{ marginBlockStart: 40 * (3 - index) }}>
    <img src={imgUrl} alt="planet-01" className="md:w-[80px] mx-auto h-[80px] object-cover" />
    <div className="w-full mt-[20px] text-center">
      <div className="flex flex-col flex-1">
        <h4 className="font-normal lg:text-[20px] text-[18px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[18px] text-[14px] text-secondary-white">{subtitle}</p>
      </div>

      <div className="w-[100px] h-[100px] mx-auto mt-20">
        <img src="/arrow.png" alt="arrow" className="w-[100px] h-[100px] object-contain" />
      </div>
    </div>
  </Motion>
);

export default InsightCard;
