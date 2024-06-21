"use client";
import Link from "next/link";
import MobileMenu from "./Mobile";
import Image from "next/image";
import logo from "@/public/images/logo.jpg";
export default function Header() {
  const scrollContact = () => {
    const contact = document.getElementById("lienHe");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full z-30  top-0 ">
      <div className="flex items-center justify-between ">
        {/* Site branding */}
        <div className="shrink-0 mr-4">
          {/* Logo */}
          <Link href="/" className="block" aria-label="Cruip">
            <Image className="lg:w-[350px] w-[170px]" src={logo} alt="" />
          </Link>
        </div>

        {/* Desktop navigation */}
        {/* <nav className="hidden md:flex lg:hidden ">
          {/* Desktop sign in links */}
          {/* <ul className="flex justify-end flex-wrap items-center"> */}
            {/* <li> */}
            {/* <Link
                href=""
                className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Liên hệ
              </Link>
            </li> */}
            {/* <li>
              <Link
                onClick={scrollContact}
                href=""
                className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
              >
                Liên hệ với Quỳnh đơn nhé~
              </Link>
            </li> */}
          {/* </ul> */}
        {/* </nav> */} 

        <MobileMenu />
      </div>
    </header>
  );
}
