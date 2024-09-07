import { StaticImageData } from "next/image";

import Mentor1 from "@/app/(site)/assets/Mentor1.png";
import Mentor2 from "@/app/(site)/assets/Mentor2.png";
import Mentor3 from "@/app/(site)/assets/Mentor3.png";
import Mentor4 from "@/app/(site)/assets/Mentor4.png";
import Mentor5 from "@/app/(site)/assets/Mentor5.png";
import Mentor6 from "@/app/(site)/assets/Mentor6.png";
import Mentor7 from "@/app/(site)/assets/Mentor7.png";
import Mentor8 from "@/app/(site)/assets/Mentor8.png";
import Mentor9 from "@/app/(site)/assets/Mentor9.png";
import Mentor10 from "@/app/(site)/assets/Mentor10.png";
import Mentor11 from "@/app/(site)/assets/Mentor11.png";
import Mentor12 from "@/app/(site)/assets/Mentor12.png";
import Mentor13 from "@/app/(site)/assets/Mentor13.png";
import Mentor14 from "@/app/(site)/assets/Mentor14.png";

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
  Mentor11,
  Mentor12,
  Mentor13,
  Mentor14,
];

export const mapMentorToIcon = (id: string): StaticImageData => {
  return mentors[Number(id) - 1];
};
