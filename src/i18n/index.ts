import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      header: {
      projects: 'Projetos',
      about: 'Sobre',
      contact: 'WhatsApp'
      },
      hero: {
        titleLine1: 'SISTEMAS REAIS.',
        titleLine2: 'VISUAIS',
        titleLine3: 'SURREAIS.',
        subtitle: 'Júlia Oliveira — Analista e Desenvolvedora. Traduzo requisitos complexos em interfaces de alto impacto, unindo precisão técnica e design intencional.'
      },
      about: {
        title: "02 / SOBRE",
        subtitle: "Arquitetando interfaces com rigor técnico e alma criativa.",
        p1: "Minha formação em ADS me deu a base estrutural, mas é na interseção entre o código e o design que eu realmente me encontro. Não vejo o Front-end apenas como estética, mas como a ferramenta principal para materializar ideias e conectar marcas a pessoas.",
        p2: "Escolher o meu trabalho é optar por uma visão que equilibra a precisão do desenvolvimento com a fluidez da criação. Desenvolvo interfaces que são limpas, performáticas e que respeitam a identidade de cada projeto, garantindo que a tecnologia nunca seja um obstáculo para a experiência.",
        skills: {
          core: "Essencial",
          visual: "Visual",
          logic: "Lógica",
          process: "Processo"
        }
      },
      footer: {
        developedBy: 'Desenvolvido por Júlia Oliveira'
      },
      projects: {
        title: "01 / PROJETOS",
        pickwise: {
            tag: "E-commerce & IA",
            desc: "Um ecossistema de moda que entende o comportamento do usuário para recomendar drops exclusivos.",
            view: "Ver Projeto",
            code: "Código",
            mobileHint: "Toque para ver detalhes"
        }
    }
    }
  },
  en: {
    translation: {
      header: {
      projects: 'Projects',
      about: 'About',
      contact: 'Let\'s Talk'
      },
      hero: {
        titleLine1: 'REAL SYSTEMS.',
        titleLine2: 'SURREAL',
        titleLine3: 'VISUALS.',
        subtitle: 'Júlia Oliveira — Systems Analyst & Developer. Translating complex requirements into high-impact interfaces, merging technical precision with intentional design.'
      },
      about: {
        title: "02 / ABOUT",
        subtitle: "Architecting interfaces with technical rigor and a creative soul.",
        p1: "My background in Systems Analysis provided a solid structural foundation, but it's at the intersection of code and design where I truly thrive. I don't see Front-end as just aesthetics; it's the primary tool for bringing ideas to life and connecting brands with people.",
        p2: "Choosing my work means opting for a vision that balances development precision with creative flow. I build clean, high-performance interfaces that respect each project's identity, ensuring that technology never stands in the way of experience.",
        skills: {
          core: "Core",
          visual: "Visual",
          logic: "Logic",
          process: "Process"
        }
      },
      footer: {
        developedBy: 'Developed by Júlia Oliveira'
      },
      projects: {
        title: "01 / PROJECTS",
        pickwise: {
            tag: "E-commerce & AI",
            desc: "A fashion ecosystem that understands user behavior to recommend exclusive drops.",
            view: "View Project",
            code: "Source Code",
            mobileHint: "Tap to see details"
        }
    }
    }
  }
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;