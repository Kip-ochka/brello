import { useUnit } from "effector-react";

import { $finished } from "@/pages/auth/sign-in/model";
import { LoginSucceeded } from "@/pages/auth/sign-in/ui/LoginSucceeded.tsx";

import { AuthnLayout } from "@/shared/ui/layouts/authn/AuthnLayout.tsx";

import { LoginForm } from "./LoginForm.tsx";

export const SignInPage = () => {
  const [finished] = useUnit([$finished]);
  return (
    <AuthnLayout>{finished ? <LoginSucceeded /> : <LoginForm />}</AuthnLayout>
  );
};
