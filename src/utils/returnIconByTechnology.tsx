import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import {
  SiInsomnia,
  SiFirebase,
  SiAdobexd,
  SiTypescript,
  SiMapbox,
  SiNodedotjs,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiNestjs,
} from 'react-icons/si';

const returnIconByTechnology = (icon: string) => {
  switch (icon) {
    case 'react':
      return <FaReact />;
    case 'react-native':
      return <FaReact />;
    case 'github':
      return <AiFillGithub />;
    case 'insomnia':
      return <SiInsomnia />;
    case 'firebase':
      return <SiFirebase />;
    case 'figma':
      return <FiFigma />;
    case 'adobexd':
      return <SiAdobexd />;
    case 'typescript':
      return <SiTypescript />;
    case 'mapbox':
      return <SiMapbox />;
    case 'nodejs':
      return <SiNodedotjs />;
    case 'nestjs':
      return <SiNestjs />;
    case 'graphql':
      return <SiGraphql />;
    case 'mysql':
      return <SiMysql />;
    case 'mongo':
      return <SiMongodb />;
    case 'postgres':
      return <SiPostgresql />;
    case 'supabase':
      return <SiSupabase />;
    default:
      return <></>;
  }
};

export { returnIconByTechnology };
