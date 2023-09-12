import React from 'react';
import Lottie from 'react-lottie-player';
import lottieLogo from '../../svg/main.json';

export default function FirstLottie() {
  return (
    <Lottie
    loop
    animationData={lottieLogo}
    play
    style={{ width: "50", height: "50" }}
  />
  );
}
