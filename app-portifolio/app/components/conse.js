'use client';

import { useEffect, useState } from 'react';

export default function Conselho() {
  const [conselho, setConselho] = useState('');

  const buscarConselho = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setConselho(data.slip.advice);
    } catch (error) {
      setConselho('Erro ao carregar conselho. Tente novamente.');
    }
  };

  useEffect(() => {
    buscarConselho();
  }, []);

  return (
    <div className="text-center text-sm text-black">
      <p className="italic">💬 Conselho do dia:</p>
      <p className="mt-1 font-medium">{`"${conselho}"`}</p>
      <button
        onClick={buscarConselho}
        className="mt-2 text-black underline hover:no-underline bg-transparent border-none cursor-pointer"
      >
        Novo conselho
      </button>
    </div>
  );
}