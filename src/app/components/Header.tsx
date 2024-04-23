import Link from "next/link";
import MobileMenu from "./Mobile";
import Image from "next/image";
import logo from "@/../public/images/logo.jpg";
export default function Header() {
  return (
    <header className="w-[370px] z-30 absolute top-0 ">
      <div className="flex items-center justify-between ">
        {/* Site branding */}
        <div className="shrink-0 mr-4">
          {/* Logo */}
          <Link href="/" className="block" aria-label="Cruip">
            <Image className="lg:w-[350px] w-[200px]" src={logo} alt="" />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex lg:hidden">
          {/* Desktop sign in links */}
          <ul className="flex justify-end flex-wrap items-center">
            <li>
              <Link
                href="/signin"
                className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
