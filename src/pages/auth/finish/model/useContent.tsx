import { ReactNode } from "react";

import { LoginFailed } from "@/pages/auth/finish/ui/LoginFailed.tsx";
import { LoginFinished } from "@/pages/auth/finish/ui/LoginFinished.tsx";
import { LoginValidating } from "@/pages/auth/finish/ui/LoginValidating.tsx";

type State = "pending" | "error" | "success";

export const useContent = ({
  pending,
  successfully,
}: {
  pending: boolean;
  successfully: boolean;
}) => {
  const state = (): State => {
    if (pending) {
      return "pending";
    }
    if (successfully) {
      return "success";
    }
    return "error";
  };

  const content: { [k in State]: ReactNode } = {
    pending: <LoginValidating />,
    error: <LoginFailed />,
    success: <LoginFinished />,
  };

  return content[state()];
};
