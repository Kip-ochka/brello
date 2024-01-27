import { createRouteView } from "atomic-router-react";

import { OnboardingUserPage } from "@/pages/onboarding/user/ui/OnboardingUserPage.tsx";
import { PageLoader } from "@/pages/onboarding/user/ui/PageLoader.tsx";

import { authenticatedRoute, currentRoute, profileLoadRoute } from "./model";

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
