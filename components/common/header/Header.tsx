"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useSelector } from "react-redux";
import DarkLogo from "@/assets/logo/logo_for_light.png";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "../searchbar/Searchbar";

interface HeaderProps {
  isScrolled?: boolean;
}

const navigation = [
  { name: "Features", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Company", href: "#" },
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItem = useSelector((state: any) => state.cart.cartItem);

  // console.log("cart", productItem);

  return (
    <header
      // className={`${
      //   isScrolled
      //     ? "fixed top-0 bg-white"
      //     : "absolute top-5 bg-white/5 backdrop-blur-sm "
      // } inset-x-0 z-50 transition-all duration-600 ease-linear `}
      className="header bg- z-99 "
    >
      <nav aria-label="Global" className="">
        <div className="flex flex-1 items-center gap-20">
          <Link href="/">
            <span className="sr-only">company logo</span>
            <Image src={DarkLogo} alt="logo" className="w-28" />
          </Link>
          <Searchbar />
        </div>

        <div className="nav-item ">
          <ul className="nav-list ">
            <li>Menu</li>
            <li>Contact Us</li>
          </ul>
          <div className="nav-button flex items-center gap-2">
            <Link href={"#"} className="btn">
              Login
            </Link>
            <Link href={"#"} className="btn btn-signup">
              Sign-up
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"></DialogPanel> */}
      </Dialog>
    </header>
  );
};

export default Header;
