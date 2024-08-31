import Step1 from "@/app/(site)/assets/Step1.svg";
import Step2 from "@/app/(site)/assets/Step2.svg";
import Step3 from "@/app/(site)/assets/Step3.svg";
import Step4 from "@/app/(site)/assets/Step4.svg";

export const mapStepToIcon = (id: string) => {
  switch (id) {
    case "step1":
      return Step1;
    case "step2":
      return Step2;
    case "step3":
      return Step3;
    case "step4":
      return Step4;
    default:
      break;
  }
};
