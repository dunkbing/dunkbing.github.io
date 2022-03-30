import { bonkingBall, cyberPurr, defaultImg, floppyShip } from './images';

const projects = [
  {
    image: defaultImg,
    description: 'me learning react',
    images: [defaultImg],
    techs: ['react', 'nextjs'],
    name: 'Personal site',
    url: 'https://github.com/dunkbing/dunkbing.github.io',
  },
  {
    image: defaultImg,
    description: 'WIP',
    images: [defaultImg],
    techs: ['react', 'nextjs', 'python'],
    name: 'Manga reading app',
    url: '#',
  },
  {
    image: cyberPurr,
    description: 'me learning unity',
    images: [cyberPurr],
    techs: ['unity'],
    name: 'Cyber Purr',
    url: 'https://github.com/dunkbing/cyber-purr',
  },
  {
    image: bonkingBall,
    description: 'my first android game',
    images: [bonkingBall],
    techs: ['unity'],
    name: 'Bonking Ball',
    url: 'https://play.google.com/store/apps/details?id=com.dunkbing.JumpingBall',
  },
  {
    image: floppyShip,
    description: 'my second android game',
    images: [],
    techs: ['unity'],
    name: 'Floppy Ship',
    url: 'https://play.google.com/store/apps/details?id=com.dunkbing.FloppyShip',
  },
  {
    image: defaultImg,
    description: 'ASCII Art generator',
    images: [],
    techs: ['python'],
    name: 'PyAscii',
    url: 'https://imgzascii.herokuapp.com/',
  },
];

export default projects;
