import { createRoutesView } from "atomic-router-react";
import { HomeRoute } from "@/pages/home";
import { AuthSignInRoute } from "@/pages/auth/sign-in";
import { NotFoundRoute } from "@/pages/not-found";

export const RoutesView = createRoutesView({
  routes: [HomeRoute, AuthSignInRoute, NotFoundRoute],
});
