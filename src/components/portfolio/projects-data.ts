import image1 from '@/assets/royal-care-1.png.asset.json';
import image2 from '@/assets/royal-care-2.png.asset.json';
import image3 from '@/assets/royal-care-3.png.asset.json';
import image4 from '@/assets/royal-care-4.png.asset.json';
import image5 from '@/assets/royal-care-5.png.asset.json';
import image6 from '@/assets/royal-care-6.png.asset.json';
import image7 from '@/assets/royal-care-7.png.asset.json';
import image8 from '@/assets/royal-care-8.png.asset.json';
import nexoraHomepage from '@/assets/nexora-homepage.png.asset.json';

export const nexoraProject = {
  title: 'NEXORA — Digital Innovation Studio',
  website: 'https://pixel-perfect-render-64528.vercel.app/',
  screenshot: nexoraHomepage.url,
};
export const royalCareProject = {
  title: 'Royal Care Hospital Management System',
  description: 'A hospital management platform for organizing medical and administrative workflows.',
};
export type GalleryImage = { reference: string; src?: string };
export const royalCareImages: GalleryImage[] = [
  { reference: 'https://postimg.cc/xqnX4sNc', src: image1.url },
  { reference: 'https://postimg.cc/yDgxZttG', src: image2.url },
  { reference: 'https://postimg.cc/tZ54bjn7', src: image3.url },
  { reference: 'https://postimg.cc/HjYL2VF7', src: image4.url },
  { reference: 'https://postimg.cc/MvXKCg6z', src: image5.url },
  { reference: 'https://postimg.cc/bZtYJbS6', src: image6.url },
  { reference: 'https://postimg.cc/v1wY6BWv', src: image7.url },
  { reference: 'https://postimg.cc/GTtd1s1J', src: image8.url },
];
export function adjacentImage(index: number, direction: number) {
  return (index + direction + royalCareImages.length) % royalCareImages.length;
}