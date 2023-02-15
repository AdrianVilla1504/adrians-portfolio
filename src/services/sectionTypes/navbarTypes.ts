export type NavProps = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (
    elementRef: React.RefObject<HTMLDivElement>,
    mobile: boolean
  ) => void;
  arrayRef: React.RefObject<HTMLDivElement>[];
};
