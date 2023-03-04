export type NavProps = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (
    elementRef: React.RefObject<HTMLDivElement>,
    mobile: boolean
  ) => void;
  arrayRef: React.RefObject<HTMLDivElement>[];
};

export type NavMobileProps = {
  links: { id: number; link: string }[];
  scrollToSection: (
    elementRef: React.RefObject<HTMLDivElement>,
    mobile: boolean
  ) => void;
  resumeURL: string;
  arrayRef: React.RefObject<HTMLDivElement>[];
  setLanguage: (lng: string) => void;
};

export type NavFullProps = {
  refLang: React.RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { id: number; link: string }[];
  scrollToSection: (
    elementRef: React.RefObject<HTMLDivElement>,
    mobile: boolean
  ) => void;
  resumeURL: string;
  arrayRef: React.RefObject<HTMLDivElement>[];
  setLanguage: (lng: string) => void;
};
