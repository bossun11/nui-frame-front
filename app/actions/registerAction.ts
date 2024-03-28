"use server";

import { z } from "zod";
import { registerFormSchema } from "../utils/validationSchema";

export const registerAction = async ({
  name,
  email,
  password,
  passwordConfirmation,
}: z.infer<typeof registerFormSchema>) => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
  });

  if (!response.ok) {
    throw new Error("ユーザー登録に失敗しました");
  }
};
