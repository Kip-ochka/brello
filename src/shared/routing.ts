import {
  UnmappedRouteObject,
  createHistoryRouter,
  createRoute,
  createRouterControls,
} from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

import { appStarted } from "@/shared/lib/init.ts";

export const routes = {
  home: createRoute(),
  auth: {
    signIn: createRoute(),
    finish: createRoute(),
  },
  onboarding: {
    user: createRoute(),
  },
};

export const notFoundRoute = createRoute();

const routesMap: UnmappedRouteObject<object>[] = [
  { path: "/", route: routes.home },
  { path: "/auth/sign-in", route: routes.auth.signIn },
  { path: "/auth/finish", route: routes.auth.finish },
  { path: "/onboarding/user", route: routes.onboarding.user },
];

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesMap,
  notFoundRoute,
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
