import { useTranslation } from "react-i18next";
import fotoJulia from "./assets/julia.jpeg";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-baloo selection:bg-[#ccff00] selection:text-black">
      <header className="fixed top-0 left-0 w-full p-6 md:px-16 flex justify-between items-center bg-[#050505] border-b border-zinc-900 z-50">
        <div className="group cursor-pointer">
          <span className="font-bebas text-4xl tracking-tighter text-[#ccff00] group-hover:text-white transition-colors uppercase">
            JO.
          </span>
        </div>

        <nav className="flex items-center gap-8 md:gap-12">
          <div className="hidden md:flex gap-10 font-bebas text-xl tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity">
            <a
              href="#projetos"
              className="hover:text-[#ccff00] transition-colors"
            >
              {t("header.projects")}
            </a>
            <a href="#sobre" className="hover:text-[#ccff00] transition-colors">
              {t("header.about")}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="font-bebas text-sm tracking-[0.2em] text-zinc-500 hover:text-[#ccff00] transition-all uppercase"
            >
              {i18n.language.includes("pt") ? "EN" : "PT"}
            </button>

            <div className="w-[1px] h-4 bg-zinc-800 hidden md:block"></div>
            <a
              href="https://wa.me/5535992656047" // Substitua pelo seu número: 55 (Brasil) + 35 (DDD) + seu número
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ccff00] text-black px-6 py-1.5 rounded-full font-bebas text-lg tracking-widest hover:bg-white transition-colors uppercase"
            >
              {t("header.contact")}
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-40 md:pt-56">
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-40">
          {/* Lado Esquerdo: Foto */}
          <div className="relative group shrink-0">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#ccff00] opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative w-64 h-[350px] md:w-[320px] md:h-[450px] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-zinc-800">
              <img
                src={fotoJulia}
                alt="Júlia Oliveira"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#ccff00] opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
          </div>

          <div className="flex flex-col items-center md:items-start max-w-2xl">
            <div className="flex items-center gap-3 text-[#ccff00] mb-6">
              <span className="font-bebas text-lg tracking-[0.3em] uppercase underline decoration-dotted">
                Tech & Design
              </span>
            </div>

            <h1 className="font-bebas text-6xl md:text-[100px] leading-[0.85] tracking-tighter mb-8 text-center md:text-left uppercase">
              {t("hero.titleLine1")} <br />
              {t("hero.titleLine2")} <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                {t("hero.titleLine3")}
              </span>
            </h1>

            <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed mb-10 text-center md:text-left max-w-lg">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/jukiaoliveira"
                target="_blank"
                className="px-6 py-2 border border-zinc-800 rounded-full font-bebas text-xl tracking-widest hover:border-[#ccff00] hover:text-[#ccff00] transition-all uppercase"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/jurafaoliveira"
                target="_blank"
                className="px-6 py-2 border border-zinc-800 rounded-full font-bebas text-xl tracking-widest hover:border-[#ccff00] hover:text-[#ccff00] transition-all uppercase"
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/jukiaoliveira"
                target="_blank"
                className="px-6 py-2 border border-zinc-800 rounded-full font-bebas text-xl tracking-widest hover:border-[#ccff00] hover:text-[#ccff00] transition-all uppercase"
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-32 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Título Lateral */}
            <div className="lg:col-span-4">
              <h2 className="font-bebas text-5xl md:text-8xl tracking-tighter lg:sticky lg:top-40 leading-none">
                <span className="text-[#ccff00] block text-3xl md:text-4xl mb-2">
                  02 /
                </span>
                {t("about.title").split(" / ")[1]}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <h3 className="text-white text-3xl md:text-5xl font-medium mb-12 leading-tight">
                {t("about.subtitle")}
              </h3>

              <div className="space-y-10 text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>

                <div className="grid grid-cols-2 gap-y-10 pt-12 border-t border-zinc-900">
                  <div>
                    <p className="font-bebas text-[#ccff00] tracking-widest text-sm mb-4">
                      {t("about.skills.core")}
                    </p>
                    <p className="text-white text-lg">
                      React • TypeScript • Next.js
                    </p>
                  </div>
                  <div>
                    <p className="font-bebas text-[#ccff00] tracking-widest text-sm mb-4">
                      {t("about.skills.visual")}
                    </p>
                    <p className="text-white text-lg">
                      Tailwind CSS • Framer Motion • UI/UX
                    </p>
                  </div>
                  <div>
                    <p className="font-bebas text-[#ccff00] tracking-widest text-sm mb-4">
                      {t("about.skills.logic")}
                    </p>
                    <p className="text-white text-lg">
                      Zustand • API Integration • Testing
                    </p>
                  </div>
                  <div>
                    <p className="font-bebas text-[#ccff00] tracking-widest text-sm mb-4">
                      {t("about.skills.process")}
                    </p>
                    <p className="text-white text-lg">
                      Git • Agile • Clean Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO PROJETOS */}
        <section id="projetos" className="py-32">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter text-zinc-800 uppercase italic">
              {t("projects.title")}
            </h2>
            <div className="h-[1px] flex-1 bg-zinc-900"></div>
          </div>

          <div className="space-y-32">
            {/* PROJETO 01 - PICKWISE AI */}
            <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="absolute -inset-x-6 -inset-y-10 bg-zinc-900/30 rounded-[40px] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 -z-10"></div>

              <div className="lg:col-span-7 relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#ccff00]/30 transition-all duration-500 bg-[#0a0a0a]">
                <img
                  src="/projects/pickwise-thumb.png"
                  alt="PickWise AI Preview"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 z-10"
                />

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/projects/pickwise-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-20 pointer-events-none"></div>
              </div>

              <div className="lg:col-span-5 lg:pl-10">
                <div className="inline-block px-3 py-1 border border-[#ccff00] text-[#ccff00] font-bebas text-sm tracking-widest uppercase mb-6">
                  {t("projects.pickwise.tag")}
                </div>

                <h3 className="font-bebas text-5xl md:text-7xl mb-6 tracking-tighter leading-none text-white group-hover:text-[#ccff00] transition-colors">
                  PICKWISE AI <br />{" "}
                  <span className="text-zinc-500">STREETWEAR</span>
                </h3>

                <p className="text-zinc-400 text-xl font-light leading-relaxed mb-10 max-w-md">
                  {t("projects.pickwise.desc")}
                </p>

                {/* CTAs Estilizados */}
                <div className="flex gap-8 font-bebas text-2xl tracking-widest uppercase">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white hover:text-[#ccff00] transition-all group/link"
                  >
                    {t("projects.pickwise.view")}{" "}
                    <span className="group-hover/link:translate-x-2 transition-transform">
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/jukiaoliveira/pickwise-ai"
                    target="_blank"
                    className="flex items-center gap-2 text-zinc-600 hover:text-white transition-all"
                  >
                    {t("projects.pickwise.code")}
                  </a>
                </div>
              </div>
            </div>

            {/* PROJETO 02 - PAM ART EVENTS */}
            <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="absolute -inset-x-6 -inset-y-10 bg-zinc-900/30 rounded-[40px] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 -z-10"></div>

              {/* Lado do Preview Visual */}
              <div className="lg:col-span-7 relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#ccff00]/30 transition-all duration-500 bg-[#0a0a0a]">
                <img
                  src="/projects/pamart-thumb.png"
                  alt="Pam Art Events Preview"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 z-10"
                />

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/projects/pamart-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-20 pointer-events-none"></div>
              </div>

              {/* Lado dos Textos Traduzidos */}
              <div className="lg:col-span-5 lg:pl-10">
                <div className="inline-block px-3 py-1 border border-[#ccff00] text-[#ccff00] font-bebas text-sm tracking-widest uppercase mb-6">
                  {t("projects.pamart.tag")}
                </div>

                <h3 className="font-bebas text-5xl md:text-7xl mb-6 tracking-tighter leading-none text-white group-hover:text-[#ccff00] transition-colors">
                  PAM ART <br />{" "}
                  <span className="text-zinc-500">EVENTS ARCH</span>
                </h3>

                <p className="text-zinc-400 text-xl font-light leading-relaxed mb-10 max-w-md">
                  {t("projects.pamart.desc")}
                </p>

                {/* CTAs Linkados com as chaves corretas */}
                <div className="flex gap-8 font-bebas text-2xl tracking-widest uppercase">
                  <a
                    href="#" // Substitua pelo link se rodar o deploy na Vercel
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-[#ccff00] transition-all group/link"
                  >
                    {t("projects.pamart.view")}{" "}
                    <span className="group-hover/link:translate-x-2 transition-transform">
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/jukiaoliveira/pam-art-events" // Link do seu repositório
                    target="_blank"
                    className="flex items-center gap-2 text-zinc-600 hover:text-white transition-all"
                  >
                    {t("projects.pamart.code")}
                  </a>
                </div>
              </div>
            </div>

            {/* NEXT DROP PLACEHOLDER (Mantido no final do fluxo) */}
            <div className="py-20 border-y border-zinc-900/50 flex flex-col items-center justify-center text-center opacity-30 hover:opacity-100 transition-opacity">
              <span className="font-bebas text-zinc-700 text-2xl tracking-[0.4em] uppercase mb-4 italic">
                Next Drop
              </span>
              <h4 className="font-bebas text-5xl md:text-8xl text-zinc-800 tracking-tighter">
                LOADING EXPERIENCE...
              </h4>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-12 md:p-20 text-center border-t border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 font-bebas text-xl tracking-[0.2em]">
          <p>© 2026 — JÚLIA OLIVEIRA</p>
          <p className="text-zinc-800">BR / MG</p>
          <p>{t("footer.developedBy")}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
