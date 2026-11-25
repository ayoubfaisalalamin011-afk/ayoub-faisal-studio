import { fireEvent, render, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { LocaleProvider, useLocale } from '@/components/portfolio/locale';

function LocaleControl() {
  const { toggleLanguage } = useLocale();
  return <button onClick={toggleLanguage} aria-label="Toggle language" />;
}
afterEach(() => { cleanup(); sessionStorage.clear(); });
describe('Portfolio language requirements', () => {
  it('starts in Sudanese Arabic with right-to-left layout', () => {
    render(<LocaleProvider><LocaleControl /></LocaleProvider>);
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
  });
  it('switches to English and back to Arabic', () => {
    const screen = render(<LocaleProvider><LocaleControl /></LocaleProvider>);
    fireEvent.click(screen.getByRole('button'));
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
    fireEvent.click(screen.getByRole('button'));
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
  });
});