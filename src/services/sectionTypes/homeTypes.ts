export type HomeProps = {
  scrollToSection: (
    elementRef: React.RefObject<HTMLDivElement>,
    mobile: boolean
  ) => void;
  experience: React.RefObject<HTMLDivElement>;
  home: React.RefObject<HTMLDivElement>;
  nav: boolean;
};
