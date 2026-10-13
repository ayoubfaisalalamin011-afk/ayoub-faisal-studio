import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import { LocaleProvider } from '@/components/portfolio/locale';
import { SelectedProjects } from '@/components/portfolio/projects';

afterEach(cleanup);

it('defaults to image one, selects each of the fifteen remaining images, and returns to one through navigation', () => {
  const screen = render(<LocaleProvider><SelectedProjects /></LocaleProvider>);
  expect(screen.getByRole('button', { name: 'Open Royal Care image 1 fullscreen' })).toBeTruthy();
  for (let image = 2; image <= 16; image += 1) {
    fireEvent.click(screen.getByRole('button', { name: `Show Royal Care image ${image}` }));
    expect(screen.getByRole('button', { name: `Open Royal Care image ${image} fullscreen` })).toBeTruthy();
  }
  fireEvent.click(screen.getByRole('button', { name: 'Next screenshot' }));
  expect(screen.getByRole('button', { name: 'Open Royal Care image 1 fullscreen' })).toBeTruthy();
  fireEvent.click(screen.getByRole('button', { name: 'Previous screenshot' }));
  expect(screen.getByRole('button', { name: 'Open Royal Care image 16 fullscreen' })).toBeTruthy();
});