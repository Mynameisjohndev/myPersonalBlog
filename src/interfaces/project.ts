export interface IProject {
  index: number;
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  techs?: string[];
}

export interface ICardProject {
  project: {
    index: number;
    title?: string;
    description?: string;
    image?: string;
    link?: string;
    techs?: string[];
  };
}
