"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function gerarSenha() {
  const digitos = [];
  while (digitos.length < 3) {
    const d = Math.floor(Math.random() * 10).toString();
    if (!digitos.includes(d)) digitos.push(d);
  }
  return digitos.join("");
}

function verificarTentativa(senha, tentativa) {
  let certo = 0;
  let quase = 0;
  for (let i = 0; i < 3; i++) {
    if (tentativa[i] === senha[i]) {
      certo++;
    } else if (senha.includes(tentativa[i])) {
      quase++;
    }
  }
  return `${certo} Certo(s), ${quase} Quase`;
}

export default function JogoRosa() {
  const [senha, setSenha] = useState(() => gerarSenha());
  const [tentativa, setTentativa] = useState("");
  const [tentativas, setTentativas] = useState([]);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState("");

  useEffect(() => {
    if (tentativas.length >= 7 && !fimDeJogo) {
      setFimDeJogo(true);
      setMensagemFinal(`Fim de jogo! A senha era... ${senha}`);
    }
  }, [tentativas, senha, fimDeJogo]);

  function lidarComTentativa() {
    if (tentativa.length !== 3 || new Set(tentativa).size !== 3 || !/^\d{3}$/.test(tentativa)) {
      alert("Digite uma senha válida com 3 dígitos únicos.");
      return;
    }

    const resultado = verificarTentativa(senha, tentativa);
    const novaEntrada = { valor: tentativa, resultado };
    setTentativas((prev) => [novaEntrada, ...prev]);
    setTentativa("");

    if (tentativa === senha) {
      setFimDeJogo(true);
      setMensagemFinal("Parabéns! Você acertou a senha!🥳🥳🥳🥳");
    }
  }

  function novoJogo() {
    setSenha(gerarSenha());
    setTentativa("");
    setTentativas([]);
    setFimDeJogo(false);
    setMensagemFinal("");
  }

  return (
    <div className="min-h-screen bg-pink-100 text-black">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-pink-400 to-pink-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-white text-xl tracking-wide">Jogo Rosa</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-white font-medium">
            <li><Link href="/" className="hover:underline hover:text-black transition">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-black transition">Sobre</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-black transition">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="p-6 sm:p-20 font-sans max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-pink-600 mb-4">
          Jogo Rosa da Senha
        </h1>

        <div className="bg-white rounded p-4 mb-6 text-sm sm:text-base leading-relaxed shadow">
          <p className="font-semibold mb-2">Como jogar:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>O objetivo é adivinhar a senha de <strong>3 dígitos únicos</strong>.</li>
            <li>A cada tentativa, você receberá dicas:</li>
            <li><strong>1 Certo</strong>: dígito certo no lugar certo.</li>
            <li><strong>1 Quase</strong>: dígito certo no lugar errado.</li>
            <li>Você tem no máximo 7 tentativas.</li>
            <li>Divirta-se!</li>
          </ul>
        </div>

        <div className="mb-4 text-center">
          <span className="text-pink-600 font-semibold">
            Tentativas restantes: {7 - tentativas.length}
          </span>
        </div>

        {!fimDeJogo && (
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={tentativa}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d*$/.test(val)) {
                  setTentativa(val);
                }
              }}
              maxLength={3}
              onKeyDown={(e) => e.key === "Enter" && lidarComTentativa()}
              className="border border-pink-400 p-2 rounded w-full font-mono text-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Digite 3 dígitos únicos"
              disabled={fimDeJogo}
            />
            <button
              onClick={lidarComTentativa}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
              disabled={fimDeJogo}
            >
              Tentar
            </button>
          </div>
        )}

        {mensagemFinal && (
          <div className={`mb-4 text-center font-medium text-lg ${fimDeJogo ? "text-pink-600" : "text-red-500"}`}>
            {mensagemFinal}
          </div>
        )}

        {fimDeJogo && (
          <div className="text-center mb-6">
            <button
              onClick={novoJogo}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Novo Jogo
            </button>
          </div>
        )}

        <ul className="space-y-2">
          {tentativas.map((t, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
            >
              <span className="font-mono text-lg">{t.valor}</span>
              <span className="text-gray-700">{t.resultado}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}