"use client";

import Link from "next/link";
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";
import { useAuthContext } from "@/app/context/AuthContext";

const NavList = () => {
  const { isSignedIn } = useAuthContext();

  return (
    <nav className="space-x-3 flex items-center sm:space-x-6">
      {isSignedIn ? (
        <>
          <Link href="/diaries/new">
            <div className="text-white hover:text-slate-200">日記を追加</div>
          </Link>
          <div className="text-white hover:text-slate-200 hover:cursor-pointer">
            ログアウト
          </div>
        </>
      ) : (
        <>
          <RegisterForm />
          <LoginForm />
        </>
      )}
    </nav>
  );
};

export default NavList;
