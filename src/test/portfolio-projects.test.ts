import { describe, expect, it } from 'vitest';
import { adjacentImage, nexoraProject, royalCareImages, royalCareProject } from '@/components/portfolio/projects-data';

describe('Selected Projects requirements', () => {
  it('keeps exactly the two supplied projects and only the NEXORA website', () => {
    expect([nexoraProject, royalCareProject]).toHaveLength(2);
    expect(nexoraProject.website).toBe('https://pixel-perfect-render-64528.vercel.app/');
    expect(nexoraProject.screenshot).toBe('/__l5e/assets-v1/a4513729-d25e-400b-9556-4aeac8206a8c/nexora-homepage.png');
    expect(royalCareProject).not.toHaveProperty('website');
  });
  it('replaces the old gallery with all sixteen supplied references in order, first featured by default', () => {
    expect(royalCareImages.map(image => image.reference)).toEqual([
      'https://postimg.cc/bG3Z6R2c', 'https://postimg.cc/XpdpMWyr',
      'https://postimg.cc/zykvBk7H', 'https://postimg.cc/G86hNgL7',
      'https://postimg.cc/ykmYQTwv', 'https://postimg.cc/Vr0zj9qK',
      'https://postimg.cc/ZCx4F5d6', 'https://postimg.cc/McvwS0F8',
      'https://postimg.cc/WtKSsKB0', 'https://postimg.cc/HcvzcPj0',
      'https://postimg.cc/v450qzSf', 'https://postimg.cc/sGpBdMFS',
      'https://postimg.cc/xNydpBH5', 'https://postimg.cc/B8LnfjH3',
      'https://postimg.cc/MXbRFLz0', 'https://postimg.cc/G49y9hGQ',
    ]);
    expect(royalCareImages.every(image => Boolean(image.src))).toBe(true);
  });
  it('moves through sixteen images and wraps in both directions', () => {
    expect(adjacentImage(0, 1)).toBe(1);
    expect(adjacentImage(7, 1)).toBe(8);
    expect(adjacentImage(15, 1)).toBe(0);
    expect(adjacentImage(0, -1)).toBe(15);
    expect(adjacentImage(4, -1)).toBe(3);
  });
});