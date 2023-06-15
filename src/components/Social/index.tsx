/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from 'react';

import GitG from '../../assets/social/greenicons/git.svg';
import IntagranG from '../../assets/social/greenicons/instagran.svg';
import LinkedinG from '../../assets/social/greenicons/linkedin.svg';
import UdemyG from '../../assets/social/greenicons/udemy.svg';
import GitW from '../../assets/social/whiteicons/git.svg';
import IntagranW from '../../assets/social/whiteicons/instagran.svg';
import LinkedinW from '../../assets/social/whiteicons/linkedin.svg';
import UdemyW from '../../assets/social/whiteicons/udemy.svg';
import { ContainerSocial } from './styles';

export const Social = () => {
  const [linkedin, setLinkedin] = useState(LinkedinW);

  const elementRef = useRef(null);

  useEffect(() => {
    function handleMouseOver(event: any) {
      if (event.target.id === 'linkedin') {
        setLinkedin(LinkedinG);
      } else {
        setLinkedin(LinkedinW);
      }
    }

    const element = elementRef.current as any;
    if (element) {
      element.addEventListener('mouseover', handleMouseOver);
      return () => {
        element.removeEventListener('mouseover', handleMouseOver);
      };
    }
    setLinkedin(LinkedinW);
  }, [elementRef]);

  return (
    <ContainerSocial id="social" ref={elementRef}>
      <img id="linkedin" ref={elementRef} src={linkedin} />
      <img id="git" ref={elementRef} src={GitW} />
      <img id="udemy" ref={elementRef} src={UdemyW} />
      <img id="instagran" ref={elementRef} src={IntagranW} />
    </ContainerSocial>
  );
};
