import React from 'react';
import Lottie from 'react-lottie-player';
import lottieLogo from '../../svg/mainThree.json';

export default function ThreeLottie() {
  return (
    <Lottie
    loop
    animationData={lottieLogo}
    play
    style={{ width: "50", height: "50" }}
  />
  );
}
