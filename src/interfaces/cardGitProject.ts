export interface ICardGitProject {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export interface IDataCardGitProject {
  card: ICardGitProject;
}

export interface IListCardGitProject {
  projects: ICardGitProject[];
}
