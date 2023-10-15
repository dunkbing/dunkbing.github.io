import { cyberPurr, defaultImg, previewPic, text2AudioPic } from './images';

const projects = [
  {
    image: previewPic,
    description: 'me learning react/nextjs',
    images: [defaultImg],
    techs: ['react', 'nextjs'],
    name: 'Personal site',
    url: 'https://github.com/dunkbing/dunkbing.github.io',
  },
  {
    image: text2AudioPic,
    description: 'Online TTS Tool',
    images: [defaultImg],
    techs: ['preact', 'freshjs', 'deno'],
    name: 'Text2Audio',
    url: 'https://text2audio.cc/',
  },
  {
    image: defaultImg,
    description:
      'A free, peer-to-peer, group video call web app, built with Deno and WebRTC',
    images: [defaultImg],
    techs: ['preact', 'freshjs', 'deno'],
    name: 'M33t.fun',
    url: 'https://m33t.deno.dev/',
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
    image: defaultImg,
    description:
      'A simple bot for joining and recording audio in the online meeting. (Google Meet, Zoom, and Teams)',
    images: [],
    techs: ['golang', 'gstreamer', 'docker'],
    name: 'Meeting bot',
    url: 'https://github.com/dunkbing/meeting-bot',
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
