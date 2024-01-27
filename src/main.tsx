import { RouterProvider } from "atomic-router-react";
import { allSettled, fork } from "effector";
import { Provider } from "effector-react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";

import { appStarted } from "@/shared/lib/init.ts";
import { router } from "@/shared/routing.ts";

const root = document.getElementById("root") as HTMLElement;
const scope = fork();

allSettled(appStarted, { scope }).catch((reason) => {
  console.warn("Failed to start the app with reason:", reason);
});

createRoot(root).render(
  <Provider value={scope}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
);
