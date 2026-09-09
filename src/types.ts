export interface ProblemCard {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface HowItWorksStep {
  number: number;
  iconName: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  difficulty: 'Fácil' | 'Médio' | 'Desafiador';
  timeToBuild: string;
  materials: string[];
  image: string;
  description: string;
}

export interface BonusItem {
  id: number;
  tag: string;
  originalPrice: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  role: string;
  location: string;
  childInfo: string;
  quote: string;
  avatar: string;
  projectBuiltImage?: string;
  projectBuiltName?: string;
  rating: number;
}

export interface TestimonialPrint {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
