import Link from "next/link";
import RegisterForm from "../form/RegisterForm";

const NavList = () => {
  return (
    <nav className="space-x-3 flex items-center sm:space-x-6">
      <RegisterForm />
      <Link
        className="font-medium text-white transition-colors hover:text-slate-200"
        href="/about"
      >
        ログイン
      </Link>
    </nav>
  );
};

export default NavList;
