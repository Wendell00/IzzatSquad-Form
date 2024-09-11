'use client';

import { ControlledInput } from '@/components/controlled-field';
import { useForm } from 'react-hook-form';
import { defaultValues, schema, Schema } from './schema';
import { Schema as SchemaForm } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/services/firebase';
import { FileDownloadItem } from '@/components/file-download-item';
import { SchemaBox } from '../schemaBox';

export default function Form() {
  const form = useForm<Schema>({
    defaultValues,
    resolver: zodResolver(schema)
  });

  const [done, setDone] = useState(false);
  const [dados, setDados] = useState<SchemaForm[]>([]);
  const [dadosBox, setDadosBox] = useState<SchemaBox[]>([]);

  const handleOnSubmit = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, 'formularios'));
    const querySnapshotBox = await getDocs(collection(db, 'formularios box'));
    const newDados: SchemaForm[] = [];
    const newDadosBox: SchemaBox[] = [];
    querySnapshot.forEach((doc) => {
      newDados.push(doc.data() as SchemaForm);
    });
    querySnapshotBox.forEach((doc) => {
      newDadosBox.push(doc.data() as SchemaBox);
    });
    setDados(newDados);
    setDadosBox(newDadosBox);
    setDone(true);
  };

  return (
    <div className="w-full h-full px-12">
      <form
        className="flex flex-col justify-center items-center w-screen"
        onSubmit={form.handleSubmit(handleOnSubmit)}
      >
        <ControlledInput
          control={form.control}
          name="name"
          label="Senha"
          placeholder="Insira a senha de admin"
          type="password"
          wrapperClass="w-auto"
        />
        <Button text="Enviar" variant="contained" type="submit" />
      </form>
      <h1 className="text-white text-[64px] font-bold mt-10">PILOTOS</h1>
      {done &&
        dados.map((item) => {
          return (
            <>
              <div
                key={item.number}
                className="w-auto p-12 rounded-lg h-auto border border-solid border-[#FF14B9] mt-[16px] flex flex-col gap-4 text-white"
              >
                <div className="flex gap-4">
                  <div>
                    <p>Nome:</p>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>Modelo do carro:</p>
                    <p>{item.carModel}</p>
                  </div>
                  <div>
                    <p>Categoria:</p>
                    <p>{item.categories}</p>
                  </div>
                  <div>
                    <p>Celular:</p>
                    <p>{item.phone}</p>
                  </div>
                  <div>
                    <p>E-mail:</p>
                    <p>{item.email}</p>
                  </div>
                  <div>
                    <p>Tamanho da camiseta:</p>
                    <p>{item.tshirt}</p>
                  </div>
                  <div>
                    <p>Comprovante foi enviado no whatsapp?:</p>
                    <p>{item.comprovanteWhatsapp}</p>
                  </div>
                </div>
                {item.comprovanteWhatsapp === 'sim' ? null : (
                  <FileDownloadItem
                    href={item.comprovante[0].base64}
                    name={item.comprovante[0].name}
                  />
                )}
                <div>
                  <p>Número:</p>
                  <p>{item.number}</p>
                </div>
              </div>
            </>
          );
        })}
      <h1 className="text-white text-[64px] font-bold mt-10">PEDESTRES</h1>
      {done &&
        dadosBox.map((item) => {
          return (
            <>
              <div
                key={item.email}
                className="w-auto p-12 rounded-lg h-auto border border-solid border-[#FF14B9] mt-[16px] flex flex-col gap-4 text-white"
              >
                <div className="flex gap-4">
                  <div>
                    <p>Nome:</p>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>Celular:</p>
                    <p>{item.phone}</p>
                  </div>
                  <div>
                    <p>E-mail:</p>
                    <p>{item.email}</p>
                  </div>
                  <div>
                    <p>Comprovante foi enviado no whatsapp?:</p>
                    <p>{item.comprovanteWhatsapp}</p>
                  </div>
                </div>
                {item.comprovanteWhatsapp === 'sim' ? null : (
                  <FileDownloadItem
                    href={item.comprovante[0].base64}
                    name={item.comprovante[0].name}
                  />
                )}
              </div>
            </>
          );
        })}
    </div>
  );
}
