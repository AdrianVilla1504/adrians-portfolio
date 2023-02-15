export type ContactProps = {
  contact: React.RefObject<HTMLDivElement>;
};

export type ContactForm = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};
