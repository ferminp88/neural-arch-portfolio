
import { Project, Skill } from './types';

// Fix: Exported the PROJECTS array which was required by Projects.tsx
export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'VOID_ENGINE',
    category: { es: 'Meta-Arquitectura', en: 'Meta-Architecture' },
    year: '2024',
    description: { 
      es: 'Sistemas generativos que desafían la percepción espacial a través de algoritmos de crecimiento neuronal.', 
      en: 'Generative systems that challenge spatial perception through neural growth algorithms.' 
    },
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=2000',
    tags: ['WebGL', 'AI', 'Parametric']
  },
  {
    id: '02',
    title: 'NEURAL_FLESH',
    category: { es: 'Identidad Digital', en: 'Digital Identity' },
    year: '2023',
    description: { 
      es: 'Una exploración sobre la morfología post-humana en entornos virtuales hiper-saturados.', 
      en: 'An exploration of post-human morphology in hyper-saturated virtual environments.' 
    },
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=2000',
    tags: ['Motion', 'Shaders', 'Acid']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Synesthesia', level: 98, category: 'Vision' },
  { name: 'Neural Design', level: 92, category: 'Tech' },
  { name: 'Acid Branding', level: 95, category: 'Core' },
  { name: 'Digital Alchemy', level: 88, category: 'Tech' },
  { name: 'Meta-Strategy', level: 90, category: 'Vision' },
  { name: 'Chaos Control', level: 85, category: 'Core' },
];

export const UI_TEXT = {
  nav: {
    manifesto: { es: 'La_Duda_01', en: 'The_Doubt_01' },
    ai: { es: 'El_Oráculo_02', en: 'The_Oracle_02' },
    contact: { es: 'Trascender_03', en: 'Transcend_03' },
  },
  hero: {
    tagline: { es: 'ADVERTENCIA: Realidad Altamente Inestable', en: 'WARNING: Reality Highly Unstable' },
    titleMain: { es: 'DESTRUIR', en: 'DESTROY' },
    titleSub: { es: 'PARA CREAR', en: 'TO CREATE' },
    descLeft: { es: 'La experiencia es el cementerio de las ideas que no se atrevieron a mutar.', en: 'Experience is the graveyard of ideas that didn\'t dare to mutate.' },
    descRight: { es: 'Dirección Creativa para la era post-humana.', en: 'Creative Direction for the post-human era.' }
  },
  manifesto: {
    section: { es: 'Frecuencia 01 / Meta-Reflexión', en: 'Frequency 01 / Meta-Reflection' },
    quote: { es: '¿Es el trabajo de ayer el cimiento del mañana, o solo el residuo tóxico de una visión que ya murió?', en: 'Is yesterday\'s work the foundation of tomorrow, or just the toxic residue of a vision that already died?' },
    body1: { es: 'Mirar hacia atrás es ver un espejismo tallado en silicio. Lo que construimos no fue arquitectura, fue una cárcel de conceptos.', en: 'Looking back is seeing a mirage carved in silicon. What we built wasn\'t architecture, it was a prison of concepts.' },
    body2: { es: 'En el vacío que queda tras quemar el portfolio, surge la verdadera pregunta: ¿Estamos diseñando herramientas o estamos siendo diseñados por ellas?', en: 'In the void left after burning the portfolio, the true question arises: Are we designing tools or are we being designed by them?' }
  },
  ai: {
    badge: { es: 'Entidad de Respuesta No-Lineal', en: 'Non-Linear Response Entity' },
    title: { es: 'EGO', en: 'EGO' },
    desc: { es: 'Interroga al fantasma en la máquina sobre el colapso de la estética.', en: 'Interrogate the ghost in the machine about the collapse of aesthetics.' },
    placeholder: { es: 'PROYECTA TU PENSAMIENTO...', en: 'PROJECT YOUR THOUGHT...' },
    btn: { es: 'Inyectar', en: 'Inject' },
    loading: { es: 'Distorsionando...', en: 'Distorting...' },
    initial: { es: 'El vacío te escucha...', en: 'The void hears you...' }
  },
  contact: {
    title: { es: '¿Listo para el Salto?', en: 'Ready for the Leap?' },
    body: { es: 'No busco clientes, busco cómplices para un sabotaje visual organizado.', en: 'I don\'t seek clients, I seek accomplices for organized visual sabotage.' },
    label: { es: 'Terminal de Enlace', en: 'Uplink Terminal' },
    cta: { es: 'Disolver Realidad', en: 'Dissolve Reality' }
  }
};
