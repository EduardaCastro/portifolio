import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Maria Eduarda Castro</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            <li><Link href="/" className="hover:underline hover:text-white transition-colors">Início</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-white transition-colors">Sobre</Link></li>
            <li><Link href="/expacademica" className="hover:underline hover:text-white transition-colors">Experiência Acadêmica</Link></li>
            <li><Link href="/exprofissional" className="hover:underline hover:text-white transition-colors">Experiência Profissional</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-white transition-colors">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col items-center sm:items-start p-8 sm:p-20 gap-16 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-left text-blue-600">
            Sobre o desenvolvimento desta página
          </h1>

          <p className="text-base sm:text-lg leading-relaxed">
  Este portfólio foi criado utilizando o <strong>Next.js</strong>, um framework React que oferece renderização eficiente, roteamento automático e uma organização moderna para desenvolvimento web.
</p>

<p className="text-base sm:text-lg leading-relaxed">
  Na parte de estilização e responsividade, utilizei o <strong>Tailwind CSS</strong>, que permite construir interfaces de forma prática e padronizada através de classes utilitárias.
</p>

<p className="text-base sm:text-lg leading-relaxed">
  Em um dos projetos, realizei a integração com uma <strong>API pública dos Conselhos</strong>, permitindo pesquisar profissionais cadastrados, aplicando requisições assíncronas e manipulação de dados em tempo real.
</p>

<p className="text-base sm:text-lg leading-relaxed">
  Também utilizei recursos do Next.js, como o carregamento inteligente de imagens através do componente <code>next/image</code>, contribuindo para uma melhor performance e experiência do usuário.
</p>
        </main>

      </div>
    </div>
  );
}