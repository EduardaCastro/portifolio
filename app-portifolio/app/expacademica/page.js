import Link from "next/link";

export default function ExperienciaAcademica() {
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
            Experiência Acadêmica
          </h1>

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Ensino Médio Técnico - Multimídia 
              </h2>
              <p>
                Escola Técnica Estadual - Ginásio Pernambucano (ETE)
                 <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">Concluído em 2024</span>
              </p>
              <p className="mt-2">
                Técnico focado em tipos de mídia, como texto, imagem, áudio e vídeo, de forma a criar uma experiência mais rica e interativa para o usuário
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Graduação em Sistemas para Internet (em andamento)
              </h2>
              <p>
                Universidade Católica de Pernambuco (UNICAP)
                 <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">Início em 2024.1 - previsão de conclusão em 2026.2</span>
              </p>
              <p className="mt-2">
                Curso voltado para desenvolvimento web, banco de dados, programação e metodologias ágeis, com forte ênfase em projetos práticos e interdisciplinaridade.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Cursos e Certificações
              </h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Programação HTML - Alura Cursos (2024)</li>
                <li>Programação JavaScript - Alura Cursos (2024)</li>
                <li>Programação CSS - Alura Cursos(2024)</li>
                <li> Dashboard Power BI – Dio Pro (2025)</li>
                <li> Comunicação Estrátegica – Fundação Bradesco (2023)</li>
                <li>Microsoft Office - Fundação Bradesco (2023)</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}