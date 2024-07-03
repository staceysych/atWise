import Mentor1 from "@/app/assets/Mentor1.png";
import Mentor2 from "@/app/assets/Mentor2.png";
import Mentor3 from "@/app/assets/Mentor3.png";
import Mentor4 from "@/app/assets/Mentor4.png";
import Mentor5 from "@/app/assets/Mentor5.png";

export const mapMentorToIcon = (id: string) => {
  switch (id) {
    case "mentor1":
      return Mentor1;
    case "mentor2":
      return Mentor2;
    case "mentor3":
      return Mentor3;
    case "mentor4":
      return Mentor4;
    case "mentor5":
      return Mentor5;
    default:
      break;
  }
};
