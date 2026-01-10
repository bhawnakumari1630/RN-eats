"use client";

import { useEffect, useState } from "react";
import Header from "../common/Header";
import { useSelector } from "react-redux";

export default function Herosection() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const cartItemsList = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (!mounted) return;

    function handleScroll() {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);
  return (
    <div className="bg-white w-full relative">
      <Header isScrolled={isScrolled} />
      <div className="relative isolate px-6 pt20 lg:px-8">
        {/* <img
          src="https://www.shutterstock.com/image-photo/jewelry-website-banner-designs-lifestyle-260nw-2617474973.jpg"
          alt=""
          className="w-full h-full object-cover"
        /> */}
      </div>
    </div>
  );
}
