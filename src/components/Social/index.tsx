/* eslint-disable consistent-return */
// import { useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { SiUdemy } from 'react-icons/si';

// import GitG from '../../assets/social/greenicons/git.svg';
// import IntagranG from '../../assets/social/greenicons/instagran.svg';
// import LinkedinG from '../../assets/social/greenicons/linkedin.svg';
// import UdemyG from '../../assets/social/greenicons/udemy.svg';
// import GitW from '../../assets/social/whiteicons/git.svg';
// import IntagranW from '../../assets/social/whiteicons/instagran.svg';
// import LinkedinW from '../../assets/social/whiteicons/linkedin.svg';
// import UdemyW from '../../assets/social/whiteicons/udemy.svg';
import { ContainerSocial } from './styles';

export const Social = () => {
  // const [isHover, setIsHover] = useState(false);
  // const [id, setId] = useState<
  //   'linkedin' | 'git' | 'udemy' | 'instagran' | ''
  // >();

  // const onMouseEnter = (event: any) => {
  //   setId(event.target.id);
  //   setIsHover(true);
  // };
  // const onMouseLeave = (event: any) => {
  //   setId('');
  //   setIsHover(false);
  // };

  return (
    <ContainerSocial>
      {/* <img
        id="linkedin"
        {...{ onMouseEnter, onMouseLeave }}
        src={isHover && id === 'linkedin' ? LinkedinG : LinkedinW}
      />
      <img
        id="git"
        {...{ onMouseEnter, onMouseLeave }}
        src={isHover && id === 'git' ? GitG : GitW}
      />
      <img
        id="udemy"
        {...{ onMouseEnter, onMouseLeave }}
        src={isHover && id === 'udemy' ? UdemyG : UdemyW}
      />
      <img
        id="instagran"
        {...{ onMouseEnter, onMouseLeave }}
        src={isHover && id === 'instagran' ? IntagranG : IntagranW}
      /> */}

      <a target="_blank" href="https://www.instagram.com/mynameisjohn.dev/">
        <AiFillInstagram />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/joaoantoniodeveloper/"
      >
        <AiFillLinkedin />
      </a>
      <a target="_blank" href="https://github.com/Mynameisjohndev">
        <AiFillGithub />
      </a>
      <a
        target="_blank"
        href="https://www.udemy.com/user/joao-antonio-da-silva-mendonca/"
      >
        <SiUdemy />
      </a>
    </ContainerSocial>
  );
};
