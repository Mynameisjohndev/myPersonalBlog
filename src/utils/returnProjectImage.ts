import dsmovie from '../assets/projects/dsmovie-min.png';
import meta from '../assets/projects/meta-min.png';
import severus from '../assets/projects/severus-min.png';
import tudao from '../assets/projects/tudao-min.png';

const returnProjectImage = (image: string) => {
  switch (image) {
    case 'meta':
      return meta;
    case 'dsmovie':
      return dsmovie;
    case 'severus':
      return severus;
    case 'tudao':
      return tudao;
    default:
      return '';
  }
};

export { returnProjectImage };
