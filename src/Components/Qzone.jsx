import React from 'react';
import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import playground from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-300 text-start p-4 space-y-4'>
            <h3 className='font-semibold'>Q-Zone</h3>
            <div>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;