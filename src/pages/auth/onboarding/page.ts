import { currentRoute } from "@/pages/auth/onboarding/model";
import { OnBoardingPage } from "@/pages/auth/onboarding/ui/OnBoardingPage.tsx";

export default {
  view: OnBoardingPage,
  route: currentRoute,
};
