import React, { useState } from 'react';
// import { FaRegCircle } from 'react-icons/fa';

import Experience from '../../assets/Experience.svg';
import { ContentRow, SelectExperienceContainer } from './CustomScroll';

export interface IExperience {
  ocupation: string;
  company: string;
  office: string;
  date: string;
  techs: string[];
  description: string[];
}
interface ISelectExperience {
  sections: IExperience[];
}

const SelectExperience: React.FC<ISelectExperience> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = event.currentTarget.scrollLeft;
    const sectionWidth = event.currentTarget.clientWidth;
    const newActiveSection = Math.round(scrollPosition / sectionWidth);

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };
  const { company, date, ocupation, office, techs, description } =
    sections[activeSection];

  return (
    <SelectExperienceContainer>
      <div className="scroll-row" onScroll={handleScroll}>
        {sections.map((_, index) => (
          <div key={index} className="scroll-stop" />
        ))}
      </div>
      <ContentRow>
        <div className="title-experience">
          <div className="column-experience">
            <div className="row-experience">
              <img src={Experience} />
              <h1>
                {ocupation} - <b className="green">{company}</b>
              </h1>
            </div>
            <div className="row-experience">
              <span>
                Cargo: <b className="green">{office}</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}
              </span>
            </div>
          </div>
        </div>
        <div>
          {description.map(item => {
            return <p className="description-item">{item}</p>;
          })}
        </div>
        <div>
          {techs.map(item => {
            return <p>{item}</p>;
          })}
        </div>
      </ContentRow>
    </SelectExperienceContainer>
  );
};

export default SelectExperience;
