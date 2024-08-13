'use client';

import { Button } from '@/components/button';
import { Whatsapp } from '@/components/whatsapp';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { IconBrandInstagram, IconMenu2 } from '@tabler/icons-react';
import MyCarousel from '@/components/carousel/carousel';

export default function Home() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  const router = useRouter();
  const handleOnClick = () => {
    router.push('/dragrace');
  };

  return (
    <>
      <nav className="flex flex-row w-full justify-center items-center lg:px-24 fixed bg-[#292D39] z-[99] h-[120px] top-0 px-8">
        <Image
          src={'/logo.svg'}
          alt="IzzatSquad"
          height={64}
          width={64}
          className="w-[80px] h-[80px]"
        />
        {/* <IconMenu2 className="text-white w-[40px] h-[40px]" /> */}
      </nav>
      <main className="flex items-start w-screen max-w-[800px] mx-auto overflow-hidden relative">
        <Image
          src={'/main1.png'}
          alt="IzzatSquad"
          height={220}
          width={320}
          className="w-full h-[239px] opacity-50"
        />
        <div className="absolute w-full max-w-[800px] h-[239px] flex justify-center items-center flex-col gap-1">
          <p className="text-white font-semibold text-center italic text-[36px]">
            BEM-VINDOS
          </p>
          <Image
            src={'/izzat.svg'}
            alt="IzzatSquad"
            height={220}
            width={320}
            className="w-[295px] h-auto"
          />
        </div>
      </main>
      <Whatsapp />
      <div className="w-full max-w-[800px] flex flex-col justify-center items-center mt-8 mx-auto">
        <p className="text-white font-semibold text-center italic text-[36px]">
          EVENTOS
        </p>

        <div className="flex w-full h-[256px] relative overflow-hidden mt-8">
          <Image
            className="w-full h-[256px] opacity-10"
            src={'/mainGif.gif'}
            width={800}
            height={256}
            alt="Izzat"
          />
          <div className="w-full h-[100px] background-personalizado absolute bottom-0"></div>
          <div className="w-full h-[256px] absolute flex flex-col justify-between items-center py-4">
            <div className="w-full flex justify-center items-center">
              <motion.div
                ref={ref4}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView4 ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 30 }}
                whileInView={{ opacity: 1 }}
                className="w-full max-w-[400px]"
              >
                <Image
                  src={'/dragrace.png'}
                  alt="Dragrace"
                  width={430}
                  height={130}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <Button
                text="DETALHES"
                variant="contained"
                className="w-[149px] h-[28px]"
                onClick={handleOnClick}
              />
              <p className="text-white font-bold text-[14px] italic">
                VAGAS LIMITADAS!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[800px] flex flex-col mt-8 mx-auto">
        <p className="text-white font-semibold text-center italic text-[36px]">
          PARCEIROS
        </p>
        <MyCarousel />
      </div>
      <div className="w-full h-[100px] flex flex-col justify-center items-center px-4 gap-4 mt-8">
        <IconBrandInstagram className="text-white w-[36px] h-[36px]" />
        <p className="text-white font-semibold text-center">
          Copyright © 2024. Todos os direitos reservados ao IZZATSQUAD. ©
        </p>
      </div>
    </>
  );
}
