import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import sculpture from '@/assets/editorial-sculpture.jpg';
import { useLocale } from './locale';
import { AboutSection, ContactSection, ServicesSection, WorkSection } from './sections';

export function PortfolioHome() {
  const { t } = useLocale();
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('portfolio-intro')) return;
    setIntro(true);
    sessionStorage.setItem('portfolio-intro', 'shown');
    const timer = window.setTimeout(() => setIntro(false), 1850);
    return () => window.clearTimeout(timer);
  }, []);
  return <>
    {intro && <div className="typographic-intro" aria-hidden="true"><span>AYOUB</span><span>FAISAL<span className="intro-period">.</span></span><div className="intro-line" /></div>}
    <section className="hero">
      <img src={sculpture} className="hero-image" width={1536} height={1024} alt="" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-content"><div className="hero-eyebrow"><span className="tiny-star" aria-hidden="true">✳</span><span>{t('INDEPENDENT MIND. INTENTIONAL DESIGN.', 'فكر مستقل. تصميم هادف.')}</span></div><h1>{t('Building digital', 'أبني تجارب')}<br />{t('experiences', 'رقمية')}<br />{t('with ', 'بـ')}<em>{t('purpose.', 'هدف.')}</em></h1><p>{t('A thoughtful blend of design, technology, and a little curiosity. By Ayoub Faisal.', 'مزيج مدروس من التصميم والتقنية وقليل من الفضول. من أيوب فيصل.')}</p><div className="hero-buttons"><Button variant="inverse" asChild><Link to="/work">{t('Explore My Work', 'اكتشف أعمالي')}<ArrowUpRight /></Link></Button><Button variant="editorial" asChild><Link to="/contact">{t('Let’s Talk', 'لنتحدث')}<ArrowUpRight /></Link></Button></div></div>
      <span className="hero-art-caption">{t('FORM / FUNCTION / FEELING', 'شكل / وظيفة / إحساس')}</span>
      <div className="hero-bottom"><Button variant="editorial" onClick={() => document.getElementById('selected-work')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><span className="scroll-circle"><ArrowDown size={14} /></span>{t('SCROLL TO DISCOVER', 'مرّر للاستكشاف')}</Button><span>{t('DESIGNED WITH INTENTION', 'مصمم بهدف')}<span className="tiny-star" aria-hidden="true">✳</span></span></div>
    </section>
    <div className="discipline-strip" aria-hidden="true"><span>{t('DIGITAL DESIGN', 'التصميم الرقمي')}</span><span>✳</span><span>{t('THOUGHTFUL DEVELOPMENT', 'التطوير المدروس')}</span><span>✳</span><span>{t('CREATIVE DIRECTION', 'التوجيه الإبداعي')}</span><span>✳</span><span>{t('PURPOSE IN EVERY PIXEL', 'هدف في كل تفصيل')}</span></div>
    <div id="selected-work"><WorkSection /></div><AboutSection /><ServicesSection /><ContactSection />
  </>;
}
