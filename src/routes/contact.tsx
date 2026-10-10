import { createFileRoute } from '@tanstack/react-router';
import { ContactSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Let’s Talk — Ayoub Faisal' },
    { name: 'description', content: 'Start a conversation about your next idea. Prepare an inquiry for Ayoub Faisal.' },
    { property: 'og:title', content: 'Let’s Talk — Ayoub Faisal' },
    { property: 'og:description', content: 'Start a conversation about your next idea. Prepare an inquiry for Ayoub Faisal.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <div className="detail-page"><ContactSection standalone /></div>,
});
