
import React from 'react';
import { Eye, ShieldCheck, Microscope, HeartPulse, ClipboardCheck } from 'lucide-react';
import { Service, Doctor, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'eye-exams',
    title: 'Comprehensive Eye Examinations',
    description: 'Detailed vision testing and ocular health assessments using state-of-the-art diagnostic equipment.',
    icon: 'Eye',
    image: 'https://picsum.photos/seed/exam/800/600'
  },
  {
    id: 'cataract',
    title: 'Cataract Treatment',
    description: 'Advanced phacoemulsification surgery with premium intraocular lens (IOL) implants for crystal-clear vision.',
    icon: 'ShieldCheck',
    image: 'https://picsum.photos/seed/cataract/800/600'
  },
  {
    id: 'vision-correction',
    title: 'Vision Correction',
    description: 'Personalized solutions for myopia, hyperopia, and astigmatism including glasses and specialized treatments.',
    icon: 'Microscope',
    image: 'https://picsum.photos/seed/vision/800/600'
  },
  {
    id: 'eye-surgery',
    title: 'Advanced Eye Surgery',
    description: 'Specialized surgical procedures for glaucoma, retinal detachment, and corneal disorders.',
    icon: 'HeartPulse',
    image: 'https://picsum.photos/seed/surgery/800/600'
  },
  {
    id: 'diagnostics',
    title: 'Ocular Diagnostics',
    description: 'Precision mapping and imaging of the eye to detect early signs of diseases like macular degeneration.',
    icon: 'ClipboardCheck',
    image: 'https://picsum.photos/seed/diagnostics/800/600'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-kabera',
    name: 'Dr. Jean-Paul Kabera',
    specialization: 'Chief Ophthalmologist & Surgeon',
    bio: 'With over 15 years of experience in restorative eye surgery, Dr. Kabera is dedicated to bringing sight to the underserved communities of Rwanda.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b1f8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'dr-umutoni',
    name: 'Dr. Alice Umutoni',
    specialization: 'Pediatric Ophthalmology Specialist',
    bio: 'Specializing in childhood vision development, Dr. Umutoni ensures that the younger generation has a bright, clear future.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'dr-mugisha',
    name: 'Dr. David Mugisha',
    specialization: 'Retinal Disease Specialist',
    bio: 'Expert in managing complex retinal conditions and diabetic retinopathy with modern laser therapies.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Emanuel N.',
    rating: 5,
    comment: 'The level of care I received for my cataract surgery was exceptional. I can see clearly again for the first time in years!',
    date: '2 months ago'
  },
  {
    id: 'rev-2',
    author: 'Beata M.',
    rating: 4,
    comment: 'Very professional staff and clean facilities. The doctors really take their time to explain everything to you.',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    author: 'Samson K.',
    rating: 5,
    comment: 'A blessing for our community. Their charity programs help so many people who otherwise couldn\'t afford treatment.',
    date: '3 weeks ago'
  }
];
