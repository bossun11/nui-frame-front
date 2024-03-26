import Link from "next/link";
import NavList from "./NavList";

const Header = () => {
  return (
    <div className="border-b bg-orange-400">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex justify-between items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter mr-4 text-white"
          >
            ぬいフレーム
          </Link>
          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Header;
