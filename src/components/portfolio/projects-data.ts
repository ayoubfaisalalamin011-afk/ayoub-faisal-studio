export const nexoraProject = {
  title: 'NEXORA — Digital Innovation Studio',
  website: 'https://pixel-perfect-render-64528.vercel.app/',
};
export const royalCareProject = {
  title: 'Royal Care Hospital Management System',
  description: 'A hospital management platform for organizing medical and administrative workflows.',
};
export type GalleryImage = { reference: string; src?: string };
export const royalCareImages: GalleryImage[] = [
  { reference: 'https://postimg.cc/xqnX4sNc' },
  { reference: 'https://postimg.cc/yDgxZttG' },
  { reference: 'https://postimg.cc/tZ54bjn7' },
  { reference: 'https://postimg.cc/HjYL2VF7' },
  { reference: 'https://postimg.cc/MvXKCg6z' },
  { reference: 'https://postimg.cc/bZtYJbS6' },
  { reference: 'https://postimg.cc/v1wY6BWv' },
  { reference: 'https://postimg.cc/GTtd1s1J' },
];
export function adjacentImage(index: number, direction: number) {
  return (index + direction + royalCareImages.length) % royalCareImages.length;
}