import { SignInPage } from "@/pages/auth/sign-in/ui/SignInPage.tsx";
import { currentRoute } from "@/pages/auth/sign-in/model";

export { SignInPage };

export const AuthSignInRoute = {
  view: SignInPage,
  route: currentRoute,
};
