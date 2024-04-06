"use server";

import { z } from "zod";
import { loginFormSchema } from "../utils/validationSchema";

export const loginAction = async ({
  email,
  password,
}: z.infer<typeof loginFormSchema>) => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("ユーザー登録に失敗しました");
  }

  const data = await response.json();
  return data;
};
