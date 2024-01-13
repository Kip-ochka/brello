import { client } from "@/shared/api/client.ts";
import { SITE_URL } from "@/app/config";
import { AuthError } from "@supabase/supabase-js";
import { createEffect } from "effector/effector.umd";

export type Email = string;
export type UserId = Uuid;

export interface User {
  id: UserId;
  email: Email;
}

const checkError = (error: AuthError | null) => {
  if (error) {
    throw error;
  }
};

export const signUpWithEmailFx = createEffect<
  { email: Email },
  void,
  AuthError
>(async ({ email }) => {
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: SITE_URL,
    },
  });
  checkError(error);
});

export const getMeFx = createEffect<void, User | null, AuthError>(async () => {
  const {
    data: { user },
    error,
  } = await client.auth.getUser();
  checkError(error);
  if (user) {
    return user as User;
  }
  return null;
});

export const signOutFx = createEffect<void, void, AuthError>(async () => {
  const { error } = await client.auth.signOut();
  checkError(error);
});
