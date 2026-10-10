import { Link } from '@tanstack/react-router';
import { ArrowDownRight, ArrowUpRight, Plus, Minus, Download, Check } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from './locale';

export function SectionLabel({ number, en, ar }: { number: string; en: string; ar: string }) {
  const { t } = useLocale();
  return <div className="section-label"><span>{number}</span><span>{t(en, ar)}</span></div>;
}
export function WorkSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const Title = standalone ? 'h1' : 'h2';
  return <section className="work-section section-space" data-reveal>
    <div className="section-heading"><div><SectionLabel number="01" en="SELECTED PROJECTS" ar="مشاريع مختارة" /><Title>{t('Considered work.', 'أعمال مدروسة.')}<br /><em>{t('Lasting impact.', 'أثر يدوم.')}</em></Title></div><span className="section-note">{t('Thoughtful by design.\nPurposeful by nature.', 'مدروسة في التصميم.\nهادفة بطبيعتها.')}</span></div>
    <div className="work-empty"><span className="empty-index">[ 01 — ∞ ]</span><div className="empty-copy"><span className="small-caps">{t('A NEW CHAPTER', 'فصل جديد')}</span><h3>{t('Good things are', 'أعمال تستحق')}<br /><em>{t('in the making.', 'الانتظار.')}</em></h3><p>{t('Real projects. Meaningful stories. Coming soon.', 'مشاريع حقيقية. قصص ملهمة. قريباً.')}</p></div><ArrowDownRight className="empty-arrow" strokeWidth={1} /><span className="empty-bottom">{t('SELECTED WORK — COMING SOON', 'أعمال مختارة — قريباً')}</span></div>
    <div className="work-bottom"><span>{t('A portfolio, always evolving.', 'مساحة إبداعية في تطوّر مستمر.')}</span><Button variant="editorial" asChild><Link to="/about">{t('Meet the person behind the work', 'تعرّف على صاحب هذه الأعمال')}<ArrowUpRight /></Link></Button></div>
  </section>;
}
export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const Title = standalone ? 'h1' : 'h2';
  return <section className="about-section section-space" data-reveal><SectionLabel number="02" en="A LITTLE ABOUT ME" ar="نبذة عني" /><div className="about-grid"><div><Title>{t('A curious mind.', 'فكر فضولي.')}<br />{t('A considered eye.', 'عين متأملة.')}<br /><em>{t('A purposeful approach.', 'نهج هادف.')}</em></Title><span className="signature">{t('Ayoub Faisal', 'أيوب فيصل')}</span></div><div className="about-copy"><span className="about-mark" aria-hidden="true">af.</span><p>{t('I believe the best digital experiences find the balance between how they look and how they feel.', 'أؤمن بأن أفضل التجارب الرقمية تحقق التوازن بين جمال المظهر وروعة الإحساس.')}</p><p className="muted-copy">{t('This is a space for thoughtful ideas, intentional design, and the work that brings them together. More of my story is coming soon.', 'هذه مساحة للأفكار المدروسة والتصميم الهادف والأعمال التي تجمع بينهما. المزيد من قصتي قريباً.')}</p><Button variant="editorial" asChild><Link to="/contact">{t('Let’s get to know each other', 'لنتعرّف على بعضنا')}<ArrowUpRight /></Link></Button></div></div></section>;
}
export function ServicesSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState<number | null>(null);
  const Title = standalone ? 'h1' : 'h2';
  const services = [
    ['Digital design', 'التصميم الرقمي', 'Clear interfaces, considered details, and digital experiences built around people.', 'واجهات واضحة وتفاصيل مدروسة وتجارب رقمية تتمحور حول الإنسان.', 'DESIGN / EXPERIENCE', 'تصميم / تجربة'],
    ['Web development', 'تطوير المواقع', 'Bringing ideas to life through responsive, accessible, carefully crafted websites.', 'تحويل الأفكار إلى مواقع متجاوبة وسهلة الوصول ومصممة بعناية.', 'DEVELOPMENT / INTERACTION', 'تطوير / تفاعل'],
    ['Creative direction', 'التوجيه الإبداعي', 'A cohesive visual point of view, from the first idea to the final detail.', 'رؤية بصرية متكاملة، من الفكرة الأولى إلى أدق التفاصيل.', 'STRATEGY / IDENTITY', 'استراتيجية / هوية'],
  ];
  return <section className="services-section section-space" data-reveal><div className="section-heading"><div><SectionLabel number="03" en="WHAT I CAN HELP WITH" ar="كيف يمكنني مساعدتك" /><Title>{t('From first idea', 'من الفكرة الأولى')}<br /><em>{t('to the final detail.', 'إلى أدق التفاصيل.')}</em></Title></div><p className="section-note">{t('Different disciplines.\nOne thoughtful approach.', 'تخصصات مختلفة.\nنهج واحد مدروس.')}</p></div><div className="services-list">{services.map((service, index) => <div className="service-row" key={index}><Button variant="editorial" className="service-toggle" onClick={() => setExpanded(expanded === index ? null : index)} aria-expanded={expanded === index} aria-controls={`service-${index}`}><span className="service-number">0{index + 1}</span><span className="service-name">{t(service[0], service[1])}</span><span className="service-category">{t(service[4], service[5])}</span><span className="service-icon">{expanded === index ? <Minus /> : <Plus />}</span></Button>{expanded === index && <p id={`service-${index}`} className="service-description">{t(service[2], service[3])}</p>}</div>)}</div></section>;
}
export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const Title = standalone ? 'h1' : 'h2';
  return <section className="contact-section section-space" data-reveal><SectionLabel number="04" en="LET’S CREATE SOMETHING" ar="لنصنع شيئاً معاً" /><div className="contact-heading"><Title>{t('Have something', 'لديك فكرة')}<br /><em>{t('in mind?', 'في بالك؟')}</em></Title><Button variant="inverse" className="contact-circle" asChild><Link to="/contact" aria-label={t('Let’s talk about your idea', 'لنتحدث عن فكرتك')}><ArrowUpRight /></Link></Button></div><div className="contact-bottom"><p>{t('Every great collaboration starts with a conversation.', 'كل تعاون مميز يبدأ بمحادثة.')}</p>{!standalone && <Button variant="editorial" asChild><Link to="/contact">{t('Let’s Talk', 'لنتحدث')}<ArrowUpRight /></Link></Button>}</div>{standalone && <InquiryForm />}</section>;
}
function InquiryForm() {
  const { t } = useLocale();
  const [saved, setSaved] = useState(false);
  const save = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Inquiry for Ayoub Faisal\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'ayoub-faisal-inquiry.txt'; link.click(); URL.revokeObjectURL(url); setSaved(true);
  };
  return <form className="inquiry-form" onSubmit={save} onChange={() => setSaved(false)}><div className="form-pair"><label>{t('Your name', 'اسمك')}<input name="name" autoComplete="name" required maxLength={120} /></label><label>{t('Email address', 'البريد الإلكتروني')}<input name="email" type="email" autoComplete="email" required maxLength={254} dir="ltr" /></label></div><label>{t('Tell me about your idea', 'أخبرني عن فكرتك')}<textarea name="message" rows={4} required maxLength={5000} /></label><div className="form-bottom"><p>{t('Contact details are coming soon. Save your inquiry as a draft; nothing is sent.', 'بيانات التواصل قريباً. احفظ رسالتك كمسودة؛ لن يتم إرسال أي شيء.')}</p><Button variant="inverse" type="submit">{saved ? <Check /> : <Download />}{t(saved ? 'Draft saved' : 'Save inquiry draft', saved ? 'تم حفظ المسودة' : 'احفظ مسودة الرسالة')}</Button></div><span className="sr-only" role="status">{saved ? t('Your inquiry was downloaded. It has not been sent.', 'تم تنزيل مسودة رسالتك. لم يتم إرسالها.') : ''}</span></form>;
}
