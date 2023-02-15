export type ExpProps = {
  experience: React.RefObject<HTMLDivElement>;
};

export type Projects = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  img: string;
  liveDemo: { url: string; disabled: boolean };
  BackendRepo: { url: string; disabled: boolean };
  frontEndRepo: { url: string; disabled: boolean };
};
