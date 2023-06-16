import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Experience from '../../assets/Experience.svg';
import { returnIconByTechnology } from '../../utils/returnIconByTechnology';
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
  const [animate, setAnimate] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = event.currentTarget.scrollLeft;
    const sectionWidth = event.currentTarget.clientWidth;
    const newActiveSection = Math.round(scrollPosition / sectionWidth);
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  const { company, date, ocupation, city, techs, description } =
    sections[activeSection];

  return (
    <SelectExperienceContainer>
      <div className="scroll-row" onScroll={handleScroll}>
        {sections.map((_, index) => (
          <div key={index} className="scroll-stop" />
        ))}
      </div>
      <TransitionGroup>
        <CSSTransition key={activeSection} timeout={500} classNames="fade">
          <ContentRow>
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
        </CSSTransition>
      </TransitionGroup>
    </SelectExperienceContainer>
  );
};

export default SelectExperience;
