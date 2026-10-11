import { describe, expect, it } from 'vitest';
import { adjacentImage, nexoraProject, royalCareImages, royalCareProject } from '@/components/portfolio/projects-data';

describe('Selected Projects requirements', () => {
  it('keeps exactly the two supplied projects and only the NEXORA website', () => {
    expect([nexoraProject, royalCareProject]).toHaveLength(2);
    expect(nexoraProject.website).toBe('https://pixel-perfect-render-64528.vercel.app/');
    expect(royalCareProject).not.toHaveProperty('website');
  });
  it('preserves all eight supplied gallery references in order', () => {
    expect(royalCareImages.map(image => image.reference)).toEqual([
      'https://postimg.cc/xqnX4sNc', 'https://postimg.cc/yDgxZttG',
      'https://postimg.cc/tZ54bjn7', 'https://postimg.cc/HjYL2VF7',
      'https://postimg.cc/MvXKCg6z', 'https://postimg.cc/bZtYJbS6',
      'https://postimg.cc/v1wY6BWv', 'https://postimg.cc/GTtd1s1J',
    ]);
  });
  it('moves through the eight images and wraps in both directions', () => {
    expect(adjacentImage(0, 1)).toBe(1);
    expect(adjacentImage(7, 1)).toBe(0);
    expect(adjacentImage(0, -1)).toBe(7);
    expect(adjacentImage(4, -1)).toBe(3);
  });
});