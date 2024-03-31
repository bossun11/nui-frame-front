import Link from "next/link";
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";

const NavList = () => {
  return (
    <nav className="space-x-3 flex items-center sm:space-x-6">
      <RegisterForm />
      <LoginForm />
    </nav>
  );
};

export default NavList;
