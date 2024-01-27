import { createRouteView } from "atomic-router-react";

import {
  authenticatedRoute,
  currentRoute,
  profileLoadRoute,
} from "@/pages/onboarding/user/model";
import { OnboardingUserPage } from "@/pages/onboarding/user/ui/OnboardingUserPage.tsx";
import { PageLoader } from "@/pages/onboarding/user/ui/PageLoader.tsx";

const ProfileLoadView = createRouteView({
  route: profileLoadRoute,
  view: OnboardingUserPage,
  otherwise: PageLoader,
});

const AuthenticationView = createRouteView({
  route: authenticatedRoute,
  view: ProfileLoadView as () => JSX.Element,
  otherwise: PageLoader,
});

export default {
  view: AuthenticationView,
  route: currentRoute,
};
