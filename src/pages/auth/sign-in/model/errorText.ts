import { SignInError } from "@/pages/auth/sign-in/model/index.ts";
import { ReactNode } from "react";

export const errorText: { [Key in SignInError]: ReactNode } = {
  InvalidError: "Must be a valid email address",
  UnknownError: "Something wrong happened. Please, try again",
  RateLimit: "Too much requests. Please, try again later",
};
