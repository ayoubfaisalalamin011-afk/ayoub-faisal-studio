import { createFileRoute } from '@tanstack/react-router';
import { AboutSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'About — Ayoub Faisal' },
    { name: 'description', content: 'Meet Ayoub Faisal and discover a thoughtful approach to digital design and creativity.' },
    { property: 'og:title', content: 'About — Ayoub Faisal' },
    { property: 'og:description', content: 'Meet Ayoub Faisal and discover a thoughtful approach to digital design and creativity.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <div className="detail-page"><AboutSection standalone /></div>,
});
