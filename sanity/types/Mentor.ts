import { PortableTextBlock } from "sanity";

export type TMentor = {
  _id: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  position: string;
  expertise: string;
  experience: PortableTextBlock[];
  education: string;
};
