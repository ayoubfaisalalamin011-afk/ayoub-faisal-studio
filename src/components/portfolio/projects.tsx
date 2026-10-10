import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from './locale';
import { adjacentImage, nexoraProject, royalCareImages, royalCareProject } from './projects-data';

export function SelectedProjects() {
  const { t, language } = useLocale();
  const [active, setActive] = useState<number | null>(null);
  const [failed, setFailed] = useState<Set<number>>(new Set());
  const image = active === null ? undefined : royalCareImages[active];
  const markFailed = (index: number) => setFailed(current => new Set(current).add(index));
  const previous = () => setActive(current => current === null ? null : adjacentImage(current, -1));
  const next = () => setActive(current => current === null ? null : adjacentImage(current, 1));
  const placeholder = (label: string) => <span className="project-placeholder"><ImageIcon size={28} strokeWidth={1} aria-hidden="true" /><span>{label}</span></span>;
  return <div className="selected-projects">
    <article className="selected-project">
      <div className="project-preview">{placeholder(t('NEXORA screenshot pending', 'لقطة شاشة نيكسورا غير متوفرة بعد'))}</div>
      <div className="project-info"><div><span className="small-caps">01 / NEXORA</span><h3>{nexoraProject.title}</h3></div><Button variant="portfolio" asChild><a href={nexoraProject.website} target="_blank" rel="noopener noreferrer">{t('Visit Website', 'زيارة الموقع')}<ArrowUpRight aria-hidden="true" /></a></Button></div>
    </article>
    <article className="selected-project">
      <div className="project-info"><div><span className="small-caps">02 / ROYAL CARE</span><h3>{t(royalCareProject.title, 'نظام إدارة مستشفى رويال كير')}</h3><p>{t(royalCareProject.description, 'منصة لإدارة المستشفيات وتنظيم سير العمل الطبي والإداري.')}</p></div></div>
      <div className="project-gallery">{royalCareImages.map((item, index) => <Button variant="editorial" className="gallery-tile" key={item.reference} onClick={() => setActive(index)} aria-label={t(`Open Royal Care image ${index + 1}`, `افتح صورة رويال كير ${index + 1}`)}>
        {item.src && !failed.has(index) ? <img src={item.src} alt={t(`Royal Care system screenshot ${index + 1}`, `لقطة شاشة نظام رويال كير ${index + 1}`)} loading="lazy" onError={() => markFailed(index)} /> : placeholder(t(`Image ${index + 1} unavailable`, `الصورة ${index + 1} غير متوفرة`))}
        <span className="gallery-index">{String(index + 1).padStart(2, '0')}</span>
      </Button>)}</div>
    </article>
    <Dialog.Root open={active !== null} onOpenChange={open => { if (!open) setActive(null); }}>
      <Dialog.Portal><Dialog.Overlay className="project-lightbox-overlay" /><Dialog.Content className="project-lightbox" dir={language === 'ar' ? 'rtl' : 'ltr'} onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); language === 'ar' ? next() : previous(); }
        if (event.key === 'ArrowRight') { event.preventDefault(); language === 'ar' ? previous() : next(); }
      }}>
        <div className="lightbox-heading"><Dialog.Title>{t('Royal Care — Gallery', 'رويال كير — معرض الصور')}</Dialog.Title><Dialog.Close asChild><Button variant="navigation" size="icon" aria-label={t('Close gallery', 'إغلاق المعرض')} title={t('Close gallery', 'إغلاق المعرض')}><X /></Button></Dialog.Close></div>
        <Dialog.Description className="sr-only">{t('Royal Care Hospital Management System screenshots', 'لقطات شاشة نظام إدارة مستشفى رويال كير')}</Dialog.Description>
        <div className="lightbox-image">{image?.src && active !== null && !failed.has(active) ? <img key={active} src={image.src} alt={t(`Royal Care system screenshot ${active + 1}`, `لقطة شاشة نظام رويال كير ${active + 1}`)} onError={() => markFailed(active)} /> : placeholder(t(`Image ${(active ?? 0) + 1} unavailable — direct image or upload needed`, `الصورة ${(active ?? 0) + 1} غير متوفرة — يلزم رابط مباشر أو رفع الصورة`))}</div>
        <div className="lightbox-controls"><Button variant="navigation" size="icon" onClick={previous} aria-label={t('Previous image', 'الصورة السابقة')} title={t('Previous image', 'الصورة السابقة')}><ChevronLeft /></Button><span aria-live="polite">{(active ?? 0) + 1} / {royalCareImages.length}</span><Button variant="navigation" size="icon" onClick={next} aria-label={t('Next image', 'الصورة التالية')} title={t('Next image', 'الصورة التالية')}><ChevronRight /></Button></div>
      </Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </div>;
}