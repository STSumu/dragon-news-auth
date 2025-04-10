import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import Qzone from '../Qzone';
import bg from '../../assets/bg.png'

const RightNavbar = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <img src={bg} alt="" />
        </div>
    );
};

export default RightNavbar;