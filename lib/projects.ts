import {
  cyberPurr,
  defaultImg,
  previewPic,
  text2AudioPic,
  tinyImg,
} from './images';

const projects = [
  {
    image: defaultImg,
    description:
      'Visualize your keystrokes in real-time. Perfect for tutorials and presentations.',
    techs: ['rust', 'tauri'],
    name: 'TypeView',
    url: 'https://typeview.db99.dev/',
  },
  {
    image: text2AudioPic,
    description: 'Online TTS Tool',
    techs: ['preact', 'freshjs', 'deno'],
    name: 'Text2Audio',
    url: 'https://text2audio.cc/',
  },
  {
    image: tinyImg,
    description: 'Online image compressor',
    techs: ['go', 'preact', 'freshjs', 'deno'],
    name: 'TinyIMG',
    url: 'https://tinyimg.cc/',
  },
  {
    image: previewPic,
    description: 'me learning react/nextjs',
    techs: ['react', 'nextjs'],
    name: 'Personal site',
    url: 'https://github.com/dunkbing/dunkbing.github.io',
  },
  {
    image: defaultImg,
    description:
      'A free, peer-to-peer, group video call web app, built with Deno and WebRTC',
    techs: ['preact', 'freshjs', 'deno'],
    name: 'M33t',
    url: 'https://m33t.deno.dev/',
  },
  {
    image: defaultImg,
    description:
      'A simple bot for joining and recording audio in the online meeting. (Google Meet, Zoom, and Teams)',
    techs: ['golang', 'gstreamer', 'docker'],
    name: 'Meeting bot',
    url: 'https://github.com/dunkbing/meeting-bot',
  },
  {
    image: defaultImg,
    description:
      'Simple terminal chat application made with Go and Redis pub/sub',
    techs: ['golang'],
    name: 'Tchat',
    url: 'https://github.com/dunkbing/tchat',
  },
];

export default projects;
