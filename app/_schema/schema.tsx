import { GithubIcon, Twitter, Linkedin, Mail, Music } from 'lucide-react';
import Image from 'next/image';

export const githubSchema = {
  href: 'https://github.com/steezplusplus',
  label: 'Github',
  subLabel: 'SteezPlusPlus',
  icon: <GithubIcon />,
};

export const twitterSchema = {
  href: 'https://twitter.com/CodingSteez',
  label: 'Twitter',
  subLabel: 'CodingSteez',
  icon: <Twitter />,
};

export const linkedinSchema = {
  href: 'https://www.linkedin.com/in/jesse-bp/',
  label: 'LinkedIn',
  subLabel: 'in/jesse-bp',
  icon: <Linkedin />,
};

export const contactSchema = {
  href: 'mailto:PenelloJ2@gmail.com',
  label: 'Contact',
  subLabel: 'Email me',
  icon: <Mail />,
};

export const themeSchema = {
  label: 'Theme',
  subLabel: '',
  icon: <></>,
};

export const musicSchema = {
  label: 'Listening to...',
  subLabel: 'LoFi',
  icon: <Music />,
};

export const audioSchema = {
  songPath: '/song.mp3',
};

export const supportCard = {
  label: 'Support me!',
  subLabel: 'Buy me a coffee',
  href: 'https://ko-fi.com/W7W5PB4J9',
  image: <Image src="/kofi.svg" alt="Ko-Fi icon" width="32" height="32" />,
};
