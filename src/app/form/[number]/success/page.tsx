'use client';

import Image from 'next/image';

import { Whatsapp } from '@/components/whatsapp';

import { Button } from '@/components/button';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function Success({ params }: { params: { number: string } }) {
  const router = useRouter();
  return (
    <>
      <nav className="flex w-full justify-center items-center lg:px-24 fixed bg-[#292D39] z-[99] h-[120px] top-0">
        <Image
          src={'/izzat.svg'}
          alt="IzzatSquad"
          height={53}
          width={268}
          className="w-[268px"
        />
      </nav>
      <main className="flex min-h-screen flex-col items-center w-full lg:w-[900px] mt-[32px] mx-auto overflow-hidden px-4">
        <p className="text-white font-medium text-[24] lg:text-[32px]">
          Formulário enviado com sucesso!
        </p>
        <IconRosetteDiscountCheckFilled className="text-[#FFF] lg:w-[160px] lg:h-[160px] mt-[16px] w-[100px] h-[100px]" />
        <p className="text-white font-medium text-[18] lg:text-[24px] text-center mt-[16px]">
          Seu número é: {' '} {params.number}
        </p>
        <p className="text-white font-medium  text-[18] lg:text-[24px] text-center mt-[16px]">
          Entraremos em contato com você lhe enviando o grupo exclusivo para
          pilotospedimos que aguarde o contato.
        </p>
        <p className="text-white font-medium  text-[18] lg:text-[24px] text-center mt-[16px]">
          E aguardamos sua presença no evento! e qualquer dúvida entre em
          contato no nosso whatsapp.
        </p>
        <div className="flex w-full justify-center gap-4 mt-[32px]">
          <Button
            text="Voltar"
            variant="contained"
            onClick={() => router.push('/')}
          />
        </div>
      </main>
      <Whatsapp />
    </>
  );
}
