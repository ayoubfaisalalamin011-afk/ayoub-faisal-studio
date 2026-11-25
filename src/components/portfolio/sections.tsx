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
    <div className="section-heading"><div><SectionLabel number="01" en="HOW I WORK" ar="بشتغل كيف" /><Title>{t('Simple steps.', 'خطوات ساهلة.')}<br /><em>{t('Real results.', 'ونتيجة تبيّن.')}</em></Title></div><span className="section-note">{t('Tap a step\nand take a look.', 'دوس على أي خطوة\nوشوف بنفسك.')}</span></div>
    <ProcessSteps />
    <div className="work-bottom"><span>{t('Projects are coming soon.', 'المشاريع جاية قريب إن شاء الله.')}</span><Button variant="editorial" asChild><Link to="/about">{t('Meet the person behind the work', 'اتعرّف على صاحب الشغل')}<ArrowUpRight /></Link></Button></div>
  </section>;
}
export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const Title = standalone ? 'h1' : 'h2';
  return <section className="about-section section-space" data-reveal><SectionLabel number="02" en="A LITTLE ABOUT ME" ar="نبذة عني" /><div className="about-grid"><div><Title>{t('A curious mind.', 'زول فضولي.')}<br />{t('A considered eye.', 'عينو بتلقط التفاصيل.')}<br /><em>{t('A purposeful approach.', 'وشغلو عندو هدف.')}</em></Title><span className="signature">{t('Ayoub Faisal', 'أيوب فيصل')}</span></div><div className="about-copy"><span className="about-mark" aria-hidden="true">af.</span><p>{t('I believe the best digital experiences find the balance between how they look and how they feel.', 'أنا شايف إنو أحسن تجربة رقمية هي الحلوة في شكلها والمريحة في إحساسها.')}</p><p className="muted-copy">{t('This is a space for thoughtful ideas, intentional design, and the work that brings them together. More of my story is coming soon.', 'دي مساحتي للأفكار الموزونة والتصميم البي فهم. باقي القصة جاية قريب إن شاء الله.')}</p><Button variant="editorial" asChild><Link to="/contact">{t('Let’s get to know each other', 'تعال نتعارف')}<ArrowUpRight /></Link></Button></div></div></section>;
}
export function ServicesSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState<number | null>(null);
  const Title = standalone ? 'h1' : 'h2';
  const services = [
    ['Digital design', 'تصميم بي فهم', 'Clear interfaces, considered details, and digital experiences built around people.', 'واجهات واضحة وتفاصيل محسوبة، وكلو معمول عشان الزول البستخدمو.', 'DESIGN / EXPERIENCE', 'تصميم / تجربة'],
    ['Web development', 'بناء المواقع', 'Bringing ideas to life through responsive, accessible, carefully crafted websites.', 'بحوّل فكرتك لموقع شغال في أي شاشة، سهل وساهل ومعمول بي عناية.', 'DEVELOPMENT / INTERACTION', 'كود / تفاعل'],
    ['Creative direction', 'أفكار واعية', 'A cohesive visual point of view, from the first idea to the final detail.', 'شوفة بصرية متكاملة، من أول فكرة لحدي آخر تفصيلة.', 'STRATEGY / IDENTITY', 'خطة / هوية'],
  ] as const;
  return <section className="services-section section-space" data-reveal><div className="section-heading"><div><SectionLabel number="03" en="WHAT I CAN HELP WITH" ar="كيف يمكنني مساعدتك" /><Title>{t('From first idea', 'من أول فكرة')}<br /><em>{t('to the final detail.', 'لحدي آخر تفصيلة.')}</em></Title></div><p className="section-note">{t('Different disciplines.\nOne thoughtful approach.', 'مجالات كتيرة.\nوطريقة واحدة موزونة.')}</p></div><div className="services-list">{services.map((service, index) => <div className="service-row" key={index}><Button variant="editorial" className="service-toggle" onClick={() => setExpanded(expanded === index ? null : index)} aria-expanded={expanded === index} aria-controls={`service-${index}`}><span className="service-number">0{index + 1}</span><span className="service-name">{t(service[0], service[1])}</span><span className="service-category">{t(service[4], service[5])}</span><span className="service-icon">{expanded === index ? <Minus /> : <Plus />}</span></Button>{expanded === index && <p id={`service-${index}`} className="service-description">{t(service[2], service[3])}</p>}</div>)}</div></section>;
}
export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useLocale();
  const Title = standalone ? 'h1' : 'h2';
  return <section className="contact-section section-space" data-reveal><SectionLabel number="04" en="LET’S CREATE SOMETHING" ar="لنصنع شيئاً معاً" /><div className="contact-heading"><Title>{t('Have something', 'عندك فكرة')}<br /><em>{t('in mind?', 'في راسك؟')}</em></Title><Button variant="inverse" className="contact-circle" asChild><Link to="/contact" aria-label={t('Let’s talk about your idea', 'يلا نتونس عن فكرتك')}><ArrowUpRight /></Link></Button></div><div className="contact-bottom"><p>{t('Every great collaboration starts with a conversation.', 'أي شغل سمح بيبدأ بي ونسة.')}</p>{!standalone && <Button variant="editorial" asChild><Link to="/contact">{t('Let’s Talk', 'يلا نتونس')}<ArrowUpRight /></Link></Button>}</div>{standalone && <InquiryForm />}</section>;
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
  return <form className="inquiry-form" onSubmit={save} onChange={() => setSaved(false)}><div className="form-pair"><label>{t('Your name', 'اسمك شنو؟')}<input name="name" autoComplete="name" required maxLength={120} /></label><label>{t('Email address', 'إيميلك')}<input name="email" type="email" autoComplete="email" required maxLength={254} dir="ltr" /></label></div><label>{t('Tell me about your idea', 'حكي لي فكرتك')}<textarea name="message" rows={4} required maxLength={5000} /></label><div className="form-bottom"><p>{t('Contact details are coming soon. Save your inquiry as a draft; nothing is sent.', 'بيانات التواصل جاية قريب. احفظ رسالتك مسودة؛ ما حتترسل لي زول.')}</p><Button variant="inverse" type="submit">{saved ? <Check /> : <Download />}{t(saved ? 'Draft saved' : 'Save inquiry draft', saved ? 'المسودة اتحفظت' : 'احفظ المسودة')}</Button></div><span className="sr-only" role="status">{saved ? t('Your inquiry was downloaded. It has not been sent.', 'مسودتك نزلت عندك. ما اترسلت.') : ''}</span></form>;
}

function ProcessSteps() {
  const { t } = useLocale();
  const [step, setStep] = useState(0);
  const steps = [
    ['Listen', 'نسمع', 'We start with a conversation to understand the idea.', 'بنبدأ بي ونسة عشان نفهم الفكرة كويس.'],
    ['Shape', 'نرسم', 'Turning the idea into a clear, beautiful design.', 'بنحوّل الفكرة لتصميم واضح وسمح.'],
    ['Build', 'نبني', 'Clean code that works on every screen.', 'كود نضيف شغال في كل شاشة.'],
    ['Launch', 'نطلق', 'Polishing every detail, then going live.', 'بنظبط كل تفصيلة وبعدين نطلقو للناس.'],
  ] as const;
  const current = steps[step]!;
  return <div className="process-steps">
    <div className="process-tabs" role="tablist">{steps.map((s, i) => <Button key={i} role="tab" variant="editorial" aria-selected={i === step} className={`process-tab${i === step ? ' is-active' : ''}`} onClick={() => setStep(i)} onMouseEnter={() => setStep(i)}><span>0{i + 1}</span>{t(s[0], s[1])}</Button>)}</div>
    <div className="process-panel" role="tabpanel" key={step}><span className="process-big">0{step + 1}</span><p>{t(current[2], current[3])}</p></div>
  </div>;
}
