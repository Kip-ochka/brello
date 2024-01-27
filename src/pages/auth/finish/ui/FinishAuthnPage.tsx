import { useUnit } from "effector-react";

import { $pending, $successfully } from "@/pages/auth/finish/model";
import { useContent } from "@/pages/auth/finish/model/useContent.tsx";

import { AuthnLayout } from "@/shared/ui/layouts/authn/AuthnLayout.tsx";

export const FinishAuthnPage = () => {
  const [pending, successfully] = useUnit([$pending, $successfully]);
  const content = useContent({ pending, successfully });

  return <AuthnLayout>{content}</AuthnLayout>;
};
