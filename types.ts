// Fix: Import React types to resolve 'Cannot find namespace React' error.
import type { FC, SVGProps } from 'react';

export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

export interface Service {
  id: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  details?: string[];
  href: string;
  image: string;
}

export interface Industry {
  name: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}