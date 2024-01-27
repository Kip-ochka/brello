import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage.tsx";
import { currentRoute } from "@/pages/not-found/model";

export const NotFoundRoute = {
  view: NotFoundPage,
  route: currentRoute,
};
