import { SignInError } from "@/pages/auth/sign-in/model/index.ts";

export const errorText: { [Key in SignInError]: string } = {
  UnknownError: "Something wrong happened. Please try again.",
  InvalidEmail: "Must be a valid email address.",
  RateLimit: "Too much logins. Try again later.",
};
