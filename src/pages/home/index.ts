import { HomePage } from "@/pages/home/ui/HomePage.tsx";
import { currentRoute } from "@/pages/home/model";

export const HomeRoute = {
  view: HomePage,
  route: currentRoute,
};