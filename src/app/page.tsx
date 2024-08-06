'use client';

import { Whatsapp } from '@/components/whatsapp';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start w-screen max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex w-full h-[400px] relative overflow-hidden">
        <Image
          className="w-full h-full opacity-10"
          src={'/mainGif.gif'}
          width={1440}
          height={400}
          alt="Izzat"
        />
        <div className="w-full h-[100px] background-personalizado absolute bottom-0"></div>
        <div className="w-full h-full absolute flex flex-col justify-center items-center py-8">
          <div className="w-full h-full flex justify-center items-center gap-[130px]">
            <p
              className={`text-white font-extrabold italic text-[36px] lg:text-[82px] drop-shadow-2xl text-center`}
            >
              DRAGRACE2 <br></br> <span className="text-[#FF14B9]">TICO’S</span>{' '}
              DAY
            </p>
            <Image
              src={'/logo.svg'}
              width={400}
              height={300}
              alt="Izzatsquad"
              className="w-[160px] lg:w-[350px] h-auto"
            />
          </div>
          <p className="text-white font-bold text-[24px] italic">
            VAGAS LIMITADAS! • 05/10
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full gap-4 items-center mt-[64px]">
        <p className="text-white font-bold text-[48px] italic">CATEGORIAS</p>
        <Image
          src={'/zz.svg'}
          width={120}
          height={80}
          alt="ZZ"
          className="w-[120px] h-auto"
        />
      </div>
      <div className="w-full flex justify-center h-auto mt-[64px]">
        <ul className="flex flex-col w-full justify-center items-center text-white text-[48px] font-semibold italic gap-[16px]">
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            Aspirado
          </li>
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            Up!
          </li>
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            Dianteira TSI
          </li>
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            Dianteira AP
          </li>
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            Traseira
          </li>
        </ul>
      </div>
      <div className="flex justify-center w-full gap-4 items-center mt-[64px]">
        <p className="text-white font-bold text-[48px] italic">VALORES</p>
        <Image
          src={'/zz.svg'}
          width={120}
          height={80}
          alt="ZZ"
          className="w-[120px] h-auto"
        />
      </div>
      <div className="w-full flex justify-center h-auto mt-[64px]">
        <ul className="flex flex-col w-full justify-center items-center text-white text-[48px] font-semibold italic gap-[16px]">
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            1° Lote R$ 550,00
          </li>
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            2° Lote R$ 650,00
          </li>
          <li className="bg-diferente w-full h-[90px] flex justify-center items-center">
            No dia R$ 750,00
          </li>
        </ul>
      </div>
      <Image
        className="h-[400px] opacity-10 w-full"
        src={'/izzat.gif'}
        width={1280}
        height={300}
        alt="Izzat"
      />
      <Whatsapp />
    </main>
  );
}
