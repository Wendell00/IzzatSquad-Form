'use client';

import { Button } from '@/components/button';

import { FormLabel } from '@mui/material';
import { useRef } from 'react';

import Image from 'next/image';

import { Schema, schema, defaultValues } from './schema';
import { SchemaBox, schemaBox, defaultValuesBox } from './schemaBox';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ControlledInput,
  ControlledRadioGroup,
  ControlledUploadFile
} from '@/components/controlled-field';
import { useForm } from 'react-hook-form';
import { firebaseConfig } from '@/services/firebase';

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { fileToBase64 } from '@/utils/helpers';

import { Whatsapp } from '@/components/whatsapp';
import { useRouter } from 'next/navigation';
import { IconClipboard } from '@tabler/icons-react';
import { useToggle } from '@/hooks/use-toggle';
import { initializeApp } from 'firebase/app';

enum FormType {
  'piloto' = 'piloto',
  'box' = 'box',
  'none' = 'none'
}

export default function Form() {
  const form = useForm<Schema>({
    defaultValues,
    resolver: zodResolver(schema)
  });

  const formBox = useForm<SchemaBox>({
    defaultValues: defaultValuesBox,
    resolver: zodResolver(schemaBox)
  });

  const handleOnClickLogo = () => {
    router.push('/');
  };

  const loading = useToggle(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('contato@izzatsquad.com').then(() => {
      alert('Pix copiado!');
    });
  };

  const router = useRouter();

  const formRef = useRef<HTMLFormElement | null>(null);

  const categoriesOptions = [
    { label: 'Aspirado', value: 'aspirado' },
    { label: 'Up!', value: 'up' },
    { label: 'Ap', value: 'ap' },
    { label: 'Dianteira Turbo', value: 'dianteira_turbo' },
    { label: 'Traseira Turbo', value: 'traseira_turbo' }
  ];

  const formOptions = [
    { label: 'Piloto', value: 'piloto' },
    { label: 'Pedestre Box', value: 'box' }
  ];

  const comprovanteOptions = [
    { label: 'Sim', value: 'sim' },
    { label: 'Não', value: 'nao' }
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
    loading.on();
    data.comprovante.map(async (item) => {
      if (item instanceof File) await fileToBase64(item);
    });
    let numeroAleatorio = gerarNumeroAleatorio();
    const dados = [] as Schema[];
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    try {
      const querySnapshot = await getDocs(collection(db, 'formularios'));
      querySnapshot.forEach((doc) => {
        dados.push(doc.data() as Schema);
      });

      while (dados.map((item) => item.number).includes(numeroAleatorio)) {
        numeroAleatorio = gerarNumeroAleatorio();
      }

      await addDoc(collection(db, 'formularios'), {
        ...data,
        number: numeroAleatorio
      });

      router.push(`/form/${numeroAleatorio}/success`);
      form.reset();
    } catch (error) {
      alert(`Erro, Atualize a página e faça novamente`);
    }
  };

  const handleOnSubmitBox = async (data: SchemaBox): Promise<void> => {
    loading.on();
    data.comprovante.map(async (item) => {
      if (item instanceof File) await fileToBase64(item);
    });
    const dados = [] as Schema[];
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    try {
      await addDoc(collection(db, 'formularios box'), data);

      router.push(`/form/success`);
      form.reset();
    } catch (error) {
      alert(`Erro, Atualize a página e faça novamente`);
    }
  };

  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
  }

  const comprovanteWhatsapp = form.watch('comprovanteWhatsapp');

  const comprovanteWhatsappPedreste = formBox.watch('comprovanteWhatsapp');

  const handleOnClick = () => {
    router.push('/');
  };

  const formTypeValue = form.watch('formType');

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
      </nav>
      <main className="flex min-h-screen flex-col items-start w-full lg:w-[900px] mt-[32px] mx-auto overflow-hidden px-[12px] lg:px-2">
        <div className="w-full flex flex-col gap-[8px]">
          <FormLabel
            id="demo-radio-buttons-group-label"
            className="text-white font-normal text-base"
          >
            Tipo de inscrição <span className="text-[#FF14B9]">*</span>
          </FormLabel>
          <ControlledRadioGroup
            options={formOptions}
            name="formType"
            control={form.control}
          />
        </div>

        {formTypeValue === FormType.piloto ? (
          <>
            <div className="lg:p-8 border-[#ffffff50] lg:border-b-[2px] lg:border-l-[2px] lg:border-solid rounded-sm mt-6">
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
                  autoComplete="off"
                />
              </div>
              <div className="w-[224px] flex flex-col gap-[8px]">
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  className="text-white font-normal text-base"
                >
                  Tamanho da camiseta <span className="text-[#FF14B9]">*</span>
                </FormLabel>
                <ControlledRadioGroup
                  options={sizeOptions}
                  name="tshirt"
                  control={form.control}
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

              <div className="flex w-full text-start gap-[16px]">
                <p className="text-white font-bold text-[18px] lg:text-[24px]">
                  PIX: contato@izzatsquad.com
                </p>
                <div
                  className="flex h-full items-center gap-[8px] cursor-pointer"
                  onClick={copyToClipboard}
                >
                  <IconClipboard
                    className={` text-white w-[26px] h-[26px] lg:w-[34px] lg:h-[34px]`}
                  />
                  <p className="text-white font-bold text-[14px] lg:text-[16px]">
                    Copiar
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[8px]">
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  className="text-white font-normal text-base"
                >
                  Deseja enviar comprovante no whatsapp?
                  <span className="text-[#FF14B9]">*</span>
                </FormLabel>
                <ControlledRadioGroup
                  options={comprovanteOptions}
                  name="comprovanteWhatsapp"
                  control={form.control}
                />
              </div>

              {comprovanteWhatsapp === 'sim' ? null : (
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
              )}

              <div className="flex w-full justify-end gap-4 mb-[32px]">
                <Button
                  text="voltar"
                  variant="outlined"
                  type="button"
                  onClick={handleOnClick}
                />
                <Button
                  text="enviar"
                  variant="contained"
                  type="submit"
                  loading={loading.value}
                />
              </div>
            </form>
          </>
        ) : formTypeValue === FormType.box ? (
          <>
            <div className="lg:p-8 border-[#ffffff50] lg:border-b-[2px] lg:border-l-[2px] lg:border-solid rounded-sm mt-6">
              <p className="text-white  italic text-[24px] lg:text-[36px] tracking-[0.15px] font-normal leading-[34px]">
                INSCRIÇÕES PARA PEDESTRE BOX
                <br></br>
                <span className="font-extrabold text-[20px] lg:text-[30px]">
                  DRAGRACE2 TICO’S DAY
                </span>
              </p>
              <p className="text-white text-[14px] lg:text-[24px] tracking-[0.15px] font-light leading-[34px] mt-[8px]">
                - Visão privilegiada da arrancada
              </p>
              <p className="text-white text-[14px] lg:text-[24px] tracking-[0.15px] font-light leading-[34px]">
                - Acesso aos boxes
              </p>
            </div>
            <form
              className="flex flex-col gap-[32px] mt-[32px] w-full "
              autoComplete="off"
              onSubmit={formBox.handleSubmit(handleOnSubmitBox)}
              ref={formRef}
            >
              <div className="w-full flex lg:flex-row flex-col gap-[32px]">
                <ControlledInput
                  control={formBox.control}
                  name="name"
                  label="Nome completo"
                  placeholder="Nome completo"
                  required
                  className="w-full"
                  autoComplete="off"
                />
              </div>
              <div className="w-full flex lg:flex-row flex-col gap-[32px]">
                <ControlledInput
                  control={formBox.control}
                  name="phone"
                  label="Celular (Whatsapp)"
                  placeholder="Celular (Whatsapp)"
                  autoComplete="off"
                  required
                />
                <ControlledInput
                  control={formBox.control}
                  name="email"
                  label="E-mail"
                  placeholder="E-mail"
                  required
                  autoComplete="off"
                />
              </div>

              <div>
                <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] mt-[8px]">
                  Observações:
                </p>
                <p className="text-white text-[16px] tracking-[0.15px] font-light leading-[34px] ml-[8px]">
                  - Valor Pedestre Box R$ 100,00
                </p>
              </div>

              <div className="flex w-full text-start gap-[16px]">
                <p className="text-white font-bold text-[18px] lg:text-[24px]">
                  PIX: contato@izzatsquad.com
                </p>
                <div
                  className="flex h-full items-center gap-[8px] cursor-pointer"
                  onClick={copyToClipboard}
                >
                  <IconClipboard
                    className={` text-white w-[26px] h-[26px] lg:w-[34px] lg:h-[34px]`}
                  />
                  <p className="text-white font-bold text-[14px] lg:text-[16px]">
                    Copiar
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[8px]">
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  className="text-white font-normal text-base"
                >
                  Deseja enviar comprovante no whatsapp?
                  <span className="text-[#FF14B9]">*</span>
                </FormLabel>
                <ControlledRadioGroup
                  options={comprovanteOptions}
                  name="comprovanteWhatsapp"
                  control={formBox.control}
                />
              </div>

              {comprovanteWhatsappPedreste === 'sim' ? null : (
                <div className="w-full flex flex-col gap-[8px]">
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="text-white font-normal text-base"
                  >
                    Comprovante <span className="text-[#FF14B9]">*</span>
                  </FormLabel>
                  <ControlledUploadFile
                    control={formBox.control}
                    name="comprovante"
                    accept={['PDF', 'PNG', 'JPG']}
                  />
                </div>
              )}

              <div className="flex w-full justify-end gap-4 mb-[32px]">
                <Button
                  text="voltar"
                  variant="outlined"
                  type="button"
                  onClick={handleOnClick}
                />
                <Button
                  text="enviar"
                  variant="contained"
                  type="submit"
                  loading={loading.value}
                />
              </div>
            </form>
          </>
        ) : null}
        <Whatsapp />
      </main>
    </>
  );
}
