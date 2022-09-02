import { bonkingBall, cyberPurr, defaultImg, floppyShip } from './images';

const projects = [
  {
    image: defaultImg,
    description: 'me learning react/nextjs',
    images: [defaultImg],
    techs: ['react', 'nextjs'],
    name: 'Personal site',
    url: 'https://github.com/dunkbing/dunkbing.github.io',
  },
  {
    image: defaultImg,
    description: 'Simple webapp for watching video from sp@nkb@ng.com',
    images: [defaultImg],
    techs: ['react', 'nextjs', 'python'],
    name: 'Video watching web app',
    url: 'https://github.com/dunkbing/p0rn-video-app',
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
    description:
      'Simple terminal chat application made with Go and Redis pub/sub',
    images: [],
    techs: ['golang'],
    name: 'Tchat',
    url: 'https://github.com/dunkbing/tchat',
  },
];

export default projects;
