import Link from "next/link";

export default function ExperienciaProfissional() {
  return (
    <div className="min-h-screen">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Maria Eduarda Castro</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            <li><Link href="/" className="hover:underline hover:text-white transition-colors">Início</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-white transition-colors">Sobre</Link></li>
            <li><Link href="/expacademica" className="hover:underline hover:text-white transition-colors">Experiência Acadêmica</Link></li>
            <li><Link href="/expprofissional" className="hover:underline hover:text-white transition-colors">Experiência Profissional</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-white transition-colors">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col items-center sm:items-start p-8 sm:p-20 gap-16 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 text-center sm:text-left w-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-left text-blue-600">
            Experiência Profissional
          </h1>

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Estagiária Suporte Técnico N1
              </h2>
              <p>
                Smile Tecnologia | Recife, Pernambuco 
                <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">Abril 2025 – atualmente</span>
              </p>
              <p className="mt-2">
               Dar apoio na manutenção de hardware e software em computadores; realizar atendimento ac cliente/usuário; prestar suporte remoto; acionar equipe externa para atendimento presencial.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Estagiária de TI
              </h2>
              <p>
                Prefeitura do Recife | Recife, Pernambuco
                 <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">Agosto 2024 – Março de 2025</span>
              </p>
              <p className="mt-2">
                Ativdades de informática, superior auxiliar no desenvolvimento de relatórios, auxiliar no desenvolvimento de sites e soluções, auxiliar na manutenção e atualização de sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Jovem Aprendiz
              </h2>
              <p>
                Brascon Resíduos | Recife, Pernambuco
                 <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">fevereiro 2023 – fevereiro 2024</span>
              </p>
              <p className="mt-2">
               Elaboração de relatórios com bancos de dados da empresa. Criação e alimentação da planilha Excel. Manutenção e controle de OS’s Emissão e recebimentos de certificados
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}