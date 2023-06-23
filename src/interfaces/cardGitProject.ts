export interface ICardGitProject {
  title: string;
  description: string;
  techs: string[];
  link: string;
  index: number;
}

export interface IDataCardGitProject {
  card: ICardGitProject;
  action: (index: number) => void;
}

export interface IListCardGitProject {
  projects: ICardGitProject[];
}
