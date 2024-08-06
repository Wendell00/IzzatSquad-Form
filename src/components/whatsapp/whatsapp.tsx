'use client';
import Image from 'next/image';

import React, { ReactElement } from 'react';

export function Whatsapp(): ReactElement {
  const handleButtonClick = () => {
    window.open(
      'https://api.whatsapp.com/send?l=pt&phone=55011941187901&text=Olá gostaria de tirar dúvidas sobre o Dragrace'
    );
  };
  return (
    <Image
      src={'/wppIcon.png'}
      alt="Contato"
      height={80}
      width={80}
      className="fixed bottom-[4rem] right-8 cursor-pointer"
      onClick={handleButtonClick}
    />
  );
}
