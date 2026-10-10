import { createFileRoute } from '@tanstack/react-router';
import { PortfolioHome } from '@/components/portfolio/home';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Ayoub Faisal — Building Digital Experiences with Purpose' },
    { name: 'description', content: 'The personal portfolio of Ayoub Faisal. A considered blend of digital design, technology, and purposeful creativity.' },
    { property: 'og:title', content: 'Ayoub Faisal — Building Digital Experiences with Purpose' },
    { property: 'og:description', content: 'Discover thoughtful digital experiences, a purposeful approach, and the creative world of Ayoub Faisal.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: PortfolioHome,
});
