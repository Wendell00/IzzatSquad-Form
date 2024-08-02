'use client';

import { Button } from '@/components/button';
import { InputText } from '@/components/input-text';
import { UploadFile } from '@/components/upload-file/upload-file';
import { FormLabel } from '@mui/material';
import { useState } from 'react';

import { InputSelect } from '@/components/input-select';

import { RadioGroup } from '@/components/radio-group';

export default function Home() {
  const [selected, setSelected] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const categoriesOptions = [
    { label: 'Aspirado', value: 'aspirado' },
    { label: 'Up!', value: 'up' },
    { label: 'Dianteira TSI', value: 'dianteira_tsi' },
    { label: 'Dianteira AP', value: 'dianteira_ap' },
    { label: 'Traseira', value: 'traseira' }
  ];

  const sizeOptions = [
    { label: 'P', value: 'p' },
    { label: 'M', value: 'm' },
    { label: 'G', value: 'g' },
    { label: 'GG', value: 'gg' },
    { label: 'G1', value: 'g1' },
    { label: 'G2', value: 'g2' },
    { label: 'G3', value: 'g3' }
  ];

  return (
    <main className="flex min-h-screen flex-col items-start w-full lg:w-[866px] mt-[32px] mx-auto overflow-hidden">
      <div className="lg:p-8 border-[#ffffff50] lg:border-b-[2px] lg:border-l-[2px] lg:border-solid rounded-sm">
        <p className="text-white  italic text-[24px] lg:text-[36px] tracking-[0.15px] font-normal leading-[34px]">
          INSCRIÇÕES PARA PILOTO
          <br></br>
          <span className="font-extrabold text-[20px] lg:text-[30px]">
            DRAGRACE2 TICO’S DAY
          </span>
        </p>
        <p className="text-white text-[14px] lg:text-[24px] tracking-[0.15px] font-light leading-[34px] mt-[8px]">
          - Premiações para piloto destaque
        </p>
        <p className="text-white text-[14px] lg:text-[24px] tracking-[0.15px] font-light leading-[34px]">
          - Premiações para carro destaque
        </p>
        <p className="text-white text-[14px] lg:text-[24px] tracking-[0.15px] font-light leading-[34px]">
          - Camisa de piloto exclusiva do evento
        </p>
        <p className="text-white text-[14px] lg:text-[24px] tracking-[0.15px] font-light leading-[34px]">
          - Direito a 1 acompanhante
        </p>
      </div>
      <form
        className="flex flex-col gap-[32px] mt-[32px] w-full"
        autoComplete="off"
      >
        <div className="w-full flex lg:flex-row flex-col gap-[32px]">
          <InputText
            label="Nome completo"
            placeholder="Nome completo"
            onChange={() => {}}
            required
            className="w-full"
          />
          <InputText
            label="Modelo do carro"
            placeholder="Modelo do carro"
            onChange={() => {}}
            className="w-full"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <FormLabel
            id="demo-radio-buttons-group-label"
            className="text-white font-normal text-base"
          >
            Categorias <span className="text-[#FF14B9]">*</span>
          </FormLabel>
          <RadioGroup
            options={categoriesOptions}
            selected={selected}
            onChange={(item) => setSelected(item)}
            display="vertical"
            name={''}
          />
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-[32px]">
          <InputText
            label="Celular (Whatsapp)"
            placeholder="Celular (Whatsapp)"
            onChange={() => {}}
            required
          />
          <InputText
            label="E-mail"
            placeholder="E-mail"
            onChange={() => {}}
            required
          />
        </div>
        <div className="w-[224px] flex flex-col gap-[8px]">
          <InputSelect
            onChange={(item) => setSelectedSize(item.value)}
            options={sizeOptions}
            value={selectedSize}
            placeholder="Selecione"
            label="Tamanho da camiseta"
            required
          />
        </div>

        <div>
          <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] mt-[8px]">
            Observações:
          </p>
          <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] ml-[8px]">
            - Valor atual R$ 550,00 (1° Lote)
          </p>
          <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] ml-[8px]">
            - Permitido até 1 acompanhante (não pagante)
          </p>
          <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] ml-[8px]">
            - Número do carro será enviado em seu e-mail
          </p>
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <FormLabel
            id="demo-radio-buttons-group-label"
            className="text-white font-normal text-base"
          >
            Comprovante <span className="text-[#FF14B9]">*</span>
          </FormLabel>
          <UploadFile files={[]} onChange={() => {}} />
        </div>
      </form>
      <div className="flex w-full justify-end gap-4 mt-[32px]">
        <Button text="voltar" variant="outlined" />
        <Button text="enviar" variant="contained" />
      </div>
    </main>
  );
}
