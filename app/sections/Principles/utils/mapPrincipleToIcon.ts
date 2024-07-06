import Principle1 from "@/app/assets/principle1.svg";
import Principle2 from "@/app/assets/principle2.svg";
import Principle3 from "@/app/assets/principle3.svg";
import Principle4 from "@/app/assets/principle4.svg";
import Principle5 from "@/app/assets/principle5.svg";

export const mapPrincipleToIcon = (id: string) => {
  switch (id) {
    case "principle1":
      return Principle1;
    case "principle2":
      return Principle2;
    case "principle3":
      return Principle3;
    case "principle4":
      return Principle4;
    case "principle5":
      return Principle5;
    default:
      break;
  }
};
