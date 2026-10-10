import { fireEvent, render, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { LocaleProvider, useLocale } from '@/components/portfolio/locale';

function LocaleControl() {
  const { toggleLanguage } = useLocale();
  return <button onClick={toggleLanguage} aria-label="Toggle language" />;
}
afterEach(() => { cleanup(); sessionStorage.clear(); });
describe('Portfolio language requirements', () => {
  it('starts in English with left-to-right layout', () => {
    render(<LocaleProvider><LocaleControl /></LocaleProvider>);
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
  });
  it('switches Arabic to right-to-left and back to English', () => {
    const screen = render(<LocaleProvider><LocaleControl /></LocaleProvider>);
    fireEvent.click(screen.getByRole('button'));
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
    fireEvent.click(screen.getByRole('button'));
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
  });
});