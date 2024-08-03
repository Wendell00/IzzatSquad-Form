'use client';

import { Button } from '@/components/button';

import { FormLabel } from '@mui/material';
import { useRef, useState } from 'react';

import { Schema, schema, defaultValues } from './schema';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ControlledInput,
  ControlledRadioGroup,
  ControlledSelect,
  ControlledUploadFile
} from '@/components/controlled-field';
import { useForm } from 'react-hook-form';
import { firebaseConfig } from '@/services/firebase';

import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { fileToBase64 } from '@/utils/helpers';
import { FileDownloadItem } from '@/components/file-download-item';

export default function Home() {
  const [selectedSize, setSelectedSize] = useState('');

  const form = useForm<Schema>({
    defaultValues,
    resolver: zodResolver(schema)
  });

  const formRef = useRef<HTMLFormElement | null>(null);

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

  const handleOnSubmit = async (data: Schema): Promise<void> => {
    data.comprovante.map(async (item) => {
      if (item instanceof File) await fileToBase64(item);
    });

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, 'formularios'), data);
      alert(`Document written with ID: ${docRef.id}`);
      form.reset();
    } catch (error) {
      alert(`Error adding document: ${error}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-start w-full lg:w-[900px] mt-[32px] mx-auto overflow-hidden lg:px-2">
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
        className="flex flex-col gap-[32px] mt-[32px] w-full "
        autoComplete="off"
        onSubmit={form.handleSubmit(handleOnSubmit)}
        ref={formRef}
      >
        <div className="w-full flex lg:flex-row flex-col gap-[32px]">
          <ControlledInput
            control={form.control}
            name="name"
            label="Nome completo"
            placeholder="Nome completo"
            required
            className="w-full"
            autoComplete="off"
          />
          <ControlledInput
            control={form.control}
            name="carModel"
            label="Modelo do carro"
            placeholder="Modelo do carro"
            className="w-full"
            autoComplete="off"
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
          <ControlledRadioGroup
            options={categoriesOptions}
            name="categories"
            control={form.control}
          />
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-[32px]">
          <ControlledInput
            control={form.control}
            name="phone"
            label="Celular (Whatsapp)"
            placeholder="Celular (Whatsapp)"
            autoComplete="off"
            required
          />
          <ControlledInput
            control={form.control}
            name="email"
            label="E-mail"
            placeholder="E-mail"
            required
            autoComplete='off'
          />
        </div>
        <div className="w-[224px] flex flex-col gap-[8px]">
          <ControlledSelect
            name={'tshirt'}
            control={form.control}
            options={sizeOptions}
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
          <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] ml-[8px]">
            - Obrigatório levar capacete
          </p>
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <FormLabel
            id="demo-radio-buttons-group-label"
            className="text-white font-normal text-base"
          >
            Comprovante <span className="text-[#FF14B9]">*</span>
          </FormLabel>
          <ControlledUploadFile
            control={form.control}
            name="comprovante"
            accept={['PDF', 'PNG', 'JPG']}
          />
        </div>
        <div className="flex w-full justify-end gap-4">
          <Button text="voltar" variant="outlined" type="button" />
          <Button text="enviar" variant="contained" type="submit" />
        </div>
      </form>
    </main>
  );
}
