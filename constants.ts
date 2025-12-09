import { Brain, Code, Zap, BarChart3, Users, Layers, LayoutTemplate, Terminal, Cpu } from "lucide-react";

export const AGENDA_ITEMS = [
  {
    time: "15m",
    title: "Intro: Las fallas del Vibecoding",
    description: "Por qué los equipos consiguen resultados rápidos pero frágiles, y cómo BMAD profesionaliza el caos para escalar en empresas.",
    icon: Brain
  },
  {
    time: "20m",
    title: "Demo Fase 1: Planning & Architecture",
    type: "(Business Track)",
    description: "Track Negocio: Interactuamos solo con el 'Project Manager Agent' (Chatbot) para definir el brief y vemos en tiempo real cómo se estructura el plan y se genera los documentos que describen el MVP.",
    icon: LayoutTemplate
  },
  {
    time: "30m",
    title: "Demo Fase 2: Development",
    type: "(Technical Track)",
    description: "Track Tech: Pasamos a la acción: abrimos la IDE, instalamos el método, los agentes toman los requerimientos y la arquitectura definida y generan código real, testeado y funcional frente a tus ojos.",
    icon: Terminal
  },
  {
    time: "40m",
    title: "Taller: Hands On",
    description: "Configuramos el entorno. Te guiamos para que corras tus primeros agentes de BMAD.",
    icon: Code
  },
  {
    time: "10m",
    title: "Cierre: Conclusiones & Corporate Next Steps",
    description: "Resultado final y oferta para implementación in-house.",
    icon: Users
  }
];

export const VALUE_PROPS = [
  {
    title: "Metodología Empresarial",
    description: "Dejá de jugar con scripts y prompts. Construí productos a través de una metodología clara y precisa ",
    icon: Layers
  },
  {
    title: "Roles Definidos",
    description: "Cada agente tiene un rol, responsabilidad y herramientas específicas. Orquestación precisa, no alucinaciones.",
    icon: Users
  },
  {
    title: "Producción Real",
    description: "Llevá tu idea a producción: los agentes te ayudan a especificar tu producto, lo implementan y terminas con código testeado y funcional",
    icon: Zap
  }
];

export interface Speaker {
  name: string;
  role: string;
  image?: string;
}

export const SPEAKERS = [
  { 
    name: "Federico López", 
    role: "Founder & CEO @ Bixen", 
    //image: "/federico.jpg"
  },
  { 
    name: "Mateo Dominguez", 
    role: "AI & Computer Scientist Specialist",
    //image: "/mateo.jpg"
  },
  { 
    name: "Juan Cruz Mendoza", 
    role: "AI & Data Specialist",
    //image: "juancruz.jpg"
  }
];