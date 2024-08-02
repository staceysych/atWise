import { StaticImageData } from "next/image";

import Mentor1 from "@/app/assets/Mentor1.png";
import Mentor2 from "@/app/assets/Mentor2.png";
import Mentor3 from "@/app/assets/Mentor3.png";
import Mentor4 from "@/app/assets/Mentor4.png";
import Mentor5 from "@/app/assets/Mentor5.png";
import Mentor6 from "@/app/assets/Mentor6.png";
import Mentor7 from "@/app/assets/Mentor7.png";
import Mentor8 from "@/app/assets/Mentor8.png";
import Mentor9 from "@/app/assets/Mentor9.png";
import Mentor10 from "@/app/assets/Mentor10.png";

const mentors: StaticImageData[] = [
  Mentor1,
  Mentor2,
  Mentor3,
  Mentor4,
  Mentor5,
  Mentor6,
  Mentor7,
  Mentor8,
  Mentor9,
  Mentor10,
];

export const mapMentorToIcon = (id: string): StaticImageData => {
  return mentors[Number(id) - 1];
};
