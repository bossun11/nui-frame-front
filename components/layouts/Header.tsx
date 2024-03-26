import Link from "next/link";
import NavList from "./NavList";
import HeaderDropdownMenu from "./HeaderDropdownMenu";

const Header = () => {
  return (
    <div className="border-b bg-orange-400">
      <div className="px-4 py-3 md:py-5 lg:px-6">
        <div className="flex justify-between items-center md:space-x-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter mr-4 text-white"
          >
            ぬいフレーム
          </Link>
          <NavList />
          <HeaderDropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
