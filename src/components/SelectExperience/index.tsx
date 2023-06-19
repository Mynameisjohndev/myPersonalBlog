/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Experience from '../../assets/Experience.svg';
import { returnIconByTechnology } from '../../utils/returnIconByTechnology';
import Switch from '../Switch';
import { ContentRow, SelectExperienceContainer } from './styles';

export interface IExperience {
  ocupation: string;
  company: string;
  office?: string;
  city?: string;
  date: string;
  techs: string[];
  description: string[];
}
interface ISelectExperience {
  sections: IExperience[];
}

const SelectExperience: React.FC<ISelectExperience> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeReading, setActiveReading] = useState(true);
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const handleToggle = () => {
    setActiveReading(!activeReading);
  };
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const scrollPosition = event.currentTarget.scrollLeft;
    const sectionWidth = event.currentTarget.clientWidth;
    const newActiveSection = Math.round(scrollPosition / sectionWidth);
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && activeReading) {
        const scrollElement = scrollRef.current as any;
        const sectionWidth =
          scrollElement.firstChild.getBoundingClientRect().width;
        const nextSection = activeSection + 1;
        if (nextSection < sections.length) {
          requestAnimationFrame(() => {
            scrollElement.scrollTo({
              left: nextSection * sectionWidth,
              behavior: 'smooth',
            });
          });
          const card = cardRef.current as unknown as HTMLElement;
          card.style.opacity = '0';
          card.style.transform = 'translateX(-30px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0px)';
          }, 250);
        } else {
          requestAnimationFrame(() => {
            scrollElement.scrollTo({
              left: 0,
              behavior: 'smooth',
            });
          });
          const card = cardRef.current as unknown as HTMLElement;
          card.style.opacity = '0';
          card.style.transform = 'translateX(-30px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0px)';
          }, 500);
        }
      }
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, [activeSection, activeReading]);

  const { company, date, ocupation, city, techs, description } =
    sections[activeSection];

  return (
    <SelectExperienceContainer>
      <div className="reading-row">
        <h1 className="reading-title">Modo leitura</h1>
        <Switch isChecked={activeReading} onToggle={handleToggle} />
      </div>
      <div className="scroll-row" onScroll={handleScroll} ref={scrollRef}>
        {sections.map((_, index) => (
          <div key={index} className="scroll-stop" />
        ))}
      </div>
      {/* <TransitionGroup>
        <CSSTransition key={activeSection} timeout={5} classNames="fade"> */}
      <ContentRow ref={cardRef}>
        <div className="title-experience">
          <div className="column-experience">
            <div
              className="row-experience"
              style={{
                alignItems: 'flex-start',
              }}
            >
              <img src={Experience} />
              <h1>
                {ocupation} - <b className="green">{company}</b>
              </h1>
            </div>
            <div className="row-experience">
              <span>
                <b className="green">Cidade: </b>
                {city}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}
              </span>
            </div>
          </div>
        </div>
        <div className="description-list">
          {description.map((item, key) => {
            return (
              <p {...{ key }} className="description-item">
                {item}
              </p>
            );
          })}
        </div>
        <h3 className="subtitle"> Tecnologias Usadas</h3>
        <div className="description-techs">
          {techs.map((item, key) => {
            return <div {...{ key }}>{returnIconByTechnology(item)}</div>;
          })}
        </div>
      </ContentRow>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </SelectExperienceContainer>
  );
};

export default SelectExperience;
