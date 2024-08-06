'use client';

import { Button } from '@/components/button';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  console.log(process.env.APIKEY);
  return (
    <main className="flex min-h-screen flex-col items-center w-full lg:w-[900px] mt-[32px] mx-auto overflow-hidden px-2">
      <p className="text-white font-medium text-[24] lg:text-[32px]">
        Formulário enviado com sucesso!
      </p>
      <IconRosetteDiscountCheckFilled className="text-[#FFF] lg:w-[160px] lg:h-[160px] mt-[16px] w-[100px] h-[100px]" />
      <p className="text-white font-medium  text-[18] lg:text-[24px] text-center mt-[16px]">
        Aguardamos sua presença no evento! e qualquer dúvida entre em contato no
        nosso whatsapp.
      </p>
      <div className="flex w-full justify-center gap-4 mt-[32px]">
        <Button
          text="Voltar"
          variant="contained"
          onClick={() => router.push('/')}
        />
      </div>
    </main>
  );
}
