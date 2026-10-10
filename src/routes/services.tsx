import { createFileRoute } from '@tanstack/react-router';
import { ServicesSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/services')({
  head: () => ({ meta: [
    { title: 'Services — Ayoub Faisal' },
    { name: 'description', content: 'Explore digital design, web development, and creative direction with a considered approach.' },
    { property: 'og:title', content: 'Services — Ayoub Faisal' },
    { property: 'og:description', content: 'Explore digital design, web development, and creative direction with a considered approach.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <div className="detail-page"><ServicesSection standalone /></div>,
});
