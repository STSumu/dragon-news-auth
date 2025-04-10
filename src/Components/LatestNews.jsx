import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='flex bg-base-300 p-3 my-8'>
            <p className='bg-[#D72050] text-white px-2 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='font-semibold text-[#403F3F]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, atque.
            </Marquee>
        </div>
    );
};

export default LatestNews;