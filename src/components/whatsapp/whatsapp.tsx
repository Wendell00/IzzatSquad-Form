'use client';
import Image from 'next/image';

import React, { ReactElement } from 'react';

export function Whatsapp(): ReactElement {
  const handleButtonClick = () => {
    window.open(
      'https://api.whatsapp.com/send?l=pt&phone=55011983741288&text=Olá gostaria de tirar dúvidas sobre o Dragrace'
    );
  };
  return (
    <Image
      src={'/wppIcon.png'}
      alt="Contato"
      height={80}
      width={80}
      className="fixed bottom-[4rem] right-8 cursor-pointer w-[50px] h-auto lg:w-[80px] lg:h-auto z-[99]"
      onClick={handleButtonClick}
    />
  );
}
