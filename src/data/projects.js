import ReactWebsite from '../images/projects/react-website.webp';
import ReactWebsiteThumb from '../images/projects/thumbs/react-website.webp';
import ProjectMura from '../images/projects/project-mura.webp';
import ProjectMuraThumb from '../images/projects/thumbs/project-mura.webp';
import SpringField from '../images/projects/springfield-village.webp';
import SpringFieldThumb from '../images/projects/thumbs/springfield-village.webp';
import HTMLWebsite from '../images/projects/html-website.webp';
import HTMLWebsiteThumb from '../images/projects/thumbs/html-website.webp';
import PMAS from '../images/projects/pmas.webp';
import PMASThumb from '../images/projects/thumbs/pmas.webp';
import Elevator from '../images/projects/arduino-elevator.webp';
import ElevatorThumb from '../images/projects/thumbs/arduino-elevator.webp';

// `featured` projects also show on the home page, using `thumb`, a small square version of `image`.
export const projects = [
  {
    name: 'React Personal Website',
    date: 2024,
    image: ReactWebsite,
    thumb: ReactWebsiteThumb,
    description: 'The website you are on right now, built with React.',
    links: { Code: 'https://github.com/probably-dean-wu/deanwu.me' },
  },
  {
    name: 'ProjectMura',
    date: 2023,
    image: ProjectMura,
    thumb: ProjectMuraThumb,
    description: 'A game that demonstrates farming, fighting and world building. The code is currently getting fixed.',
    links: { Play: 'https://gx.games/games/g5pin6/projectmura/' },
    featured: true,
  },
  {
    name: 'SpringField Village',
    date: 2022,
    image: SpringField,
    thumb: SpringFieldThumb,
    description: 'A game about rescuing a village that has been torn apart by monsters.',
    links: {
      Play: 'https://gx.games/games/owhc19/springfield-village/',
      Code: 'https://github.com/probably-dean-wu/SpringField-Village',
    },
    featured: true,
  },
  {
    name: 'HTML Personal Website',
    date: 2022,
    image: HTMLWebsite,
    thumb: HTMLWebsiteThumb,
    description: 'A personal website made in grade 12 for my computer science class.',
    links: {
      Visit: 'https://probably-dean-wu.github.io',
      Code: 'https://github.com/probably-dean-wu/probably-dean-wu.github.io',
    },
    featured: true,
  },
  {
    name: 'PMAS',
    date: 2022,
    image: PMAS,
    thumb: PMASThumb,
    description: 'Personal, Medical, Assistant, Service.',
    links: { Code: 'https://github.com/MatiasCW/PMAS' },
  },
  {
    name: 'Elevator with Arduino',
    date: 2022,
    image: Elevator,
    thumb: ElevatorThumb,
    description: 'A school project made with the Arduino language.',
    links: { Watch: '/elevator' },
  },
];
