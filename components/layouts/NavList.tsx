import Link from "next/link";

const NavList = () => {
  return (
    <nav className="hidden sm:space-x-6 sm:flex sm:items-center">
      <Link
        className="font-medium text-white transition-colors hover:text-slate-200"
        href="/"
      >
        新規登録
      </Link>
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
