import { attach, createEvent, createStore, sample } from "effector";
import { not } from "patronum";
import { api } from "@/shared/api";

export type SignInError = "UnknownError" | "InvalidError" | "RateLimit";

const signInFx = attach({ effect: api.auth.signUpWithEmailFx });
export const emailChanged = createEvent<string>();
export const formSubmitted = createEvent();
export const backToLoginPressed = createEvent();

export const $email = createStore("");
export const $error = createStore<SignInError | null>(null);
export const $pending = signInFx.pending;
export const $finished = createStore(false);

const $isEmailValid = $email.map(
  (email) => email.length > 5 && email.includes("@") && email.includes(".")
);

$email.on(emailChanged, (_, email) => email);

sample({
  clock: formSubmitted,
  source: { email: $email },
  filter: $isEmailValid,
  target: [signInFx, $error.reinit],
});

$finished.on(signInFx.done, () => true);

sample({
  clock: formSubmitted,
  filter: not($isEmailValid),
  fn: (): SignInError => "InvalidError",
  target: $error,
});

$error.on(signInFx.failData, (_, error) => {
  if (error.status === 429) {
    return "RateLimit";
  }
  return "UnknownError";
});

sample({
  clock: backToLoginPressed,
  target: [$finished.reinit, $email.reinit, $error.reinit],
});
