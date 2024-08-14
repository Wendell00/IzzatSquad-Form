'use client';

import { Button } from '@/components/button';
import { Whatsapp } from '@/components/whatsapp';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import AnimatedListItem from '@/components/animated-list/animated-list';
import { IconBrandInstagram } from '@tabler/icons-react';

export default function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/form');
  };

  const handleOnClickLogo = () => {
    router.push('/');
  };

  const handleOnClickFooter = () => {
    router.push('https://www.instagram.com/izzatsquad/');
  };

  const itemsValor = [
    '1° Lote R$ 550,00',
    '2° Lote R$ 650,00',
    'No dia R$ 750,00'
  ];

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5);

  const itemsPremiacoes = ['PILOTO DESTAQUE', 'CARRO DESTAQUE'];

  const itemsCategoria = [
    'Aspirado',
    'Up!',
    'Dianteira TURBO',
    'Dianteira AP',
    'Traseira'
  ];

  return (
    <>
      <nav className="flex flex-col w-full justify-center items-center lg:px-24 fixed bg-[#1a1a1b] z-[99] h-auto top-0 px-8 py-4">
        <Image
          src={'/izzat.svg'}
          alt="IzzatSquad"
          height={64}
          width={64}
          className="w-[300px] h-auto cursor-pointer"
          onClick={handleOnClickLogo}
        />
        <Button
          text={'SE INSCREVER'}
          variant={'contained'}
          onClick={handleOnClick}
        />
        {/* <IconMenu2 className="text-white w-[40px] h-[40px]" /> */}
      </nav>
      <main className="flex min-h-screen flex-col items-start w-screen max-w-[1440px] mx-auto overflow-hidden bg-[#1a1a1b]">
        <div className="flex w-full h-auto relative overflow-hidden">
          <Image
            className="w-full h-full"
            src={'/arrancada.jpg'}
            width={1440}
            height={400}
            alt="Izzat"
          />
          {/* <div className="w-full h-[100px] background-personalizado absolute bottom-0"></div>
          <div className="w-full h-full absolute flex flex-col justify-center items-center py-8">
            <div className="w-full h-full flex justify-center items-center gap-[20px] lg:gap-[130px]">
              <motion.div
                ref={ref4}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView4 ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 30 }}
                whileInView={{ opacity: 1 }}
              >
                <p
                  className={`text-white font-extrabold italic text-[32px] lg:text-[82px] drop-shadow-2xl text-center`}
                >
                  DRAGRACE2 <br></br>{' '}
                  <span className="text-[#FF14B9]">TICO’S</span> DAY
                </p>
              </motion.div>
              <motion.div
                ref={ref4}
                initial={{ x: 100, opacity: 0 }}
                animate={isInView4 ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 30 }}
                whileInView={{ opacity: 1 }}
              >
                <Image
                  src={'/logo.svg'}
                  width={400}
                  height={300}
                  alt="Izzatsquad"
                  className="w-[130px] lg:w-[350px] h-auto"
                />
              </motion.div>
            </div>
            <p className="text-white font-bold text-[24px] italic">
              VAGAS LIMITADAS! • 05/10
            </p>
          </div> */}
        </div>
        <motion.div
          ref={ref1}
          initial={{ y: -100, opacity: 0 }}
          animate={isInView1 ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 30 }}
          whileInView={{ opacity: 1 }}
          className="w-full mt-[64px] flex justify-center"
        >
          <div className="flex justify-center w-full gap-4 items-center">
            <p className="text-white font-bold text-[36px] lg:text-[48px] italic">
              CATEGORIAS
            </p>
          </div>
        </motion.div>
        <div className="w-full flex justify-center h-auto mt-[64px]">
          <ul className="flex flex-col w-full justify-center items-center text-white text-[36px] lg:text-[48px] font-semibold italic gap-[16px]">
            {itemsCategoria.map((item, index) => (
              <AnimatedListItem key={index} index={index}>
                <li className="bg-diferente w-screen h-[90px] flex justify-center items-center">
                  {item}
                </li>
              </AnimatedListItem>
            ))}
          </ul>
        </div>
        <motion.div
          ref={ref2}
          initial={{ y: -100, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 30 }}
          whileInView={{ opacity: 1 }}
          className="w-full flex justify-center"
        >
          <div className="flex justify-center w-full gap-4 items-center mt-[64px]">
            <p className="text-white font-bold text-[36px] lg:text-[48px] italic">
              VALORES
            </p>
          </div>
        </motion.div>

        <div className="w-full flex justify-center h-auto mt-[64px]">
          <ul className="flex flex-col w-full justify-center items-center text-white text-[36px] lg:text-[48px] font-semibold italic gap-[16px]">
            {itemsValor.map((item, index) => (
              <AnimatedListItem key={index} index={index}>
                <li className="bg-diferente w-screen h-[90px] flex justify-center items-center">
                  {item}
                </li>
              </AnimatedListItem>
            ))}
          </ul>
        </div>

        <motion.div
          ref={ref3}
          initial={{ y: -100, opacity: 0 }}
          animate={isInView3 ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 30 }}
          whileInView={{ opacity: 1 }}
          className="w-full mt-[64px] flex justify-center"
        >
          <div className="flex justify-center w-full gap-4 items-center">
            <p className="text-white font-bold text-[36px] lg:text-[48px] italic text-center">
              PREMIAÇÕES <br></br> EXTRA
            </p>
          </div>
        </motion.div>

        <div className="w-full flex justify-center h-auto mt-[64px]">
          <ul className="flex flex-col w-full justify-center items-center text-white text-[36px] lg:text-[48px] font-semibold italic gap-[16px]">
            {itemsPremiacoes.map((item, index) => (
              <AnimatedListItem key={index} index={index}>
                <li className="bg-diferente w-screen h-[90px] flex justify-center items-center">
                  {item}
                </li>
              </AnimatedListItem>
            ))}
          </ul>
        </div>
        <motion.div
          ref={ref5}
          initial={{ y: -100, opacity: 0 }}
          animate={isInView5 ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 30 }}
          whileInView={{ opacity: 1 }}
          className="w-full mt-[64px] flex justify-center"
        >
          <div className="flex justify-center w-full gap-4 items-center">
            <p className="text-white font-bold text-[36px] lg:text-[48px] italic text-center">
              LOCAL
            </p>
          </div>
        </motion.div>
        <div className="w-full flex flex-col justify-center relative items-center h-auto gap-8 mt-[64px]">
          <p className='text-white lg:text-[32px] text-[24px] w-[80%]'>Arena Carnelós Centro de Eventos - Sorocaba</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.989306147054!2d-47.5286295!3d-23.5505755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58c7f4db2e573%3A0xa30026e3c0adbe61!2sArena%20Carnel%C3%B3s%20Centro%20de%20Eventos%20-%20Sorocaba!5e0!3m2!1spt-BR!2sbr!4v1723593988972!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full flex flex-col justify-center relative items-center h-auto ">
          <Image
            className="opacity-10 w-full h-auto"
            src={'/izzat.gif'}
            width={1280}
            height={300}
            alt="Izzat"
          />
          <Button
            text={'SE INSCREVER'}
            variant={'contained'}
            onClick={handleOnClick}
            className="absolute"
          />
        </div>
        <Whatsapp />
      </main>
      <div className="w-full h-[100px] flex flex-col justify-center items-center px-4 gap-4 mt-8 bg-[#1a1a1b]">
        <IconBrandInstagram
          className="text-white w-[36px] h-[36px] cursor-pointer"
          onClick={handleOnClickFooter}
        />
        <p className="text-white font-semibold text-center">
          Copyright © 2024. Todos os direitos reservados ao IZZATSQUAD. ©
        </p>
      </div>
    </>
  );
}
