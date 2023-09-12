import React from 'react';
import Lottie from 'react-lottie-player';
import lottieLogo from '../../svg/mainSeccond.json';

export default function SecondLottie() {
  return (
    <Lottie
    loop
    animationData={lottieLogo}
    play
    style={{ width: "50", height: "50" }}
  />
  );
}
