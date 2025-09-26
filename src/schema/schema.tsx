import { GitBranch, Bird, User, Mail, Coffee, SunMoon } from 'lucide-react';

export const githubSchema = {
  href: 'https://github.com/steezplusplus',
  label: 'Github',
  subLabel: 'SteezPlusPlus',
  icon: <GitBranch />,
};

export const twitterSchema = {
  href: 'https://twitter.com/CodingSteez',
  label: 'Twitter',
  subLabel: 'CodingSteez',
  icon: <Bird />,
};

export const linkedinSchema = {
  href: 'https://www.linkedin.com/in/jesse-bp/',
  label: 'LinkedIn',
  subLabel: 'in/jesse-bp',
  icon: <User />,
};

export const contactSchema = {
  href: 'mailto:PenelloJ2@gmail.com',
  label: 'Contact',
  subLabel: 'Email me',
  icon: <Mail />,
};

export const themeSchema = {
  label: 'Theme',
  icon: <SunMoon />,
};

export const musicSchema = {
  label: 'Listening to...',
  subLabel: 'LoFi',
};

export const audioSchema = {
  songPath: '/song.mp3',
};

export const supportCard = {
  label: 'Support me!',
  subLabel: 'Buy me a coffee',
  href: 'https://ko-fi.com/W7W5PB4J9',
  icon: <Coffee />,
};
