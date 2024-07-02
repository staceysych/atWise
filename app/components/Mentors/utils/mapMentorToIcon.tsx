import Mentor1 from "@/app/assets/Mentor1.png";
import Mentor2 from "@/app/assets/Mentor2.png";
import Mentor3 from "@/app/assets/Mentor3.png";

export const mapMentorToIcon = (id: string) => {
  switch (id) {
    case "mentor1":
      return Mentor1;
    case "mentor2":
      return Mentor2;
    case "mentor3":
      return Mentor3;
    default:
      break;
  }
};
