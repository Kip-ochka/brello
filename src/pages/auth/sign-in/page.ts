import { currentRoute } from "@/pages/auth/sign-in/model";
import { SignInPage } from "@/pages/auth/sign-in/ui/SignInPage.tsx";

export { SignInPage };

export default {
  view: SignInPage,
  route: currentRoute,
};
