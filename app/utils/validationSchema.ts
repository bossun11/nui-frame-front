import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "名前は2文字以上で入力してください" })
      .max(100, { message: "名前は100文字以下で入力してください" }),
    email: z
      .string()
      .min(2, { message: "メールアドレスを入力してください" })
      .email({ message: "メールアドレスの形式が正しくありません" }),
    password: z
      .string()
      .min(8, { message: "パスワードは8文字以上で入力してください" })
      .max(100, { message: "パスワードは100文字以下で入力してください" }),
    passwordConfirmation: z
      .string()
      .min(8, { message: "パスワードは8文字以上で入力してください" })
      .max(100, { message: "パスワードは100文字以下で入力してください" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "パスワードと確認用パスワードが一致していません",
    path: ["passwordConfirmation"],
  });
