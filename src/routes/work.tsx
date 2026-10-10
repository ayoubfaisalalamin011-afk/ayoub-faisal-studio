import { createFileRoute } from '@tanstack/react-router';
import { WorkSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/work')({
  head: () => ({ meta: [
    { title: 'Selected Work — Ayoub Faisal' },
    { name: 'description', content: 'A space for real projects and meaningful stories. The evolving portfolio of Ayoub Faisal.' },
    { property: 'og:title', content: 'Selected Work — Ayoub Faisal' },
    { property: 'og:description', content: 'A space for real projects and meaningful stories. The evolving portfolio of Ayoub Faisal.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <div className="detail-page"><WorkSection standalone /></div>,
});
