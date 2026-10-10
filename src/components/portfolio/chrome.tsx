import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUp, ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from './locale';

export function Navigation() {
  const { language, toggleLanguage, t } = useLocale();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  const links = [
    { to: '/work', en: 'Work', ar: 'الأعمال' },
    { to: '/about', en: 'About', ar: 'نبذة عني' },
    { to: '/services', en: 'Services', ar: 'الخدمات' },
    { to: '/contact', en: 'Contact', ar: 'تواصل' },
  ] as const;
  return <>
    <a className="skip-link" href="#main-content">{t('Skip to content', 'انتقل إلى المحتوى')}</a>
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label={t('Ayoub Faisal — Home', 'أيوب فيصل — الرئيسية')}>AYOUB FAISAL<span className="brand-period">.</span></Link>
      <nav className="floating-nav" aria-label={t('Main navigation', 'التنقل الرئيسي')}>
        {links.map(link => <Button variant="navigation" asChild key={link.to}><Link to={link.to} activeProps={{ className: 'is-active' }}>{t(link.en, link.ar)}{link.to === '/contact' && <ArrowUpRight size={14} />}</Link></Button>)}
      </nav>
      <div className="header-actions">
        <Button variant="navigation" className="language-button" onClick={toggleLanguage} aria-label={t('Switch to Arabic', 'Switch to English')}><span lang={language === 'en' ? 'ar' : 'en'}>{language === 'en' ? 'العربية' : 'EN'}</span><span className="language-dot" /></Button>
        <Button variant="navigation" size="icon" className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={t(open ? 'Close menu' : 'Open menu', open ? 'إغلاق القائمة' : 'فتح القائمة')} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </header>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label={t('Mobile navigation', 'قائمة التنقل')}>
      {links.map(link => <Button variant="navigation" asChild key={link.to}><Link to={link.to} onClick={() => setOpen(false)}>{t(link.en, link.ar)}<ArrowUpRight /></Link></Button>)}
    </nav>}
  </>;
}

export function Footer() {
  const { t } = useLocale();
  return <footer className="site-footer"><Link to="/" className="wordmark">AYOUB FAISAL<span className="brand-period">.</span></Link><span>{t('© 2026 Ayoub Faisal', '© ٢٠٢٦ أيوب فيصل')}</span><Button variant="editorial" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>{t('Back to top', 'العودة للأعلى')}<ArrowUp size={16} /></Button></footer>;
}

export function MotionEffects() {
  const cursor = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const move = (event: PointerEvent) => {
      if (!cursor.current) return;
      cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.current.classList.add('cursor-visible');
      cursor.current.classList.toggle('cursor-interactive', !!(event.target instanceof Element && event.target.closest('a, button, input, textarea')));
    };
    const leave = () => cursor.current?.classList.remove('cursor-visible');
    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', leave);
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); };
  }, []);
  return <div ref={cursor} className="desktop-cursor" aria-hidden="true"><span /></div>;
}
