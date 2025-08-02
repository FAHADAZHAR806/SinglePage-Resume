"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can use any icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between  px-4 py-3 max-w-[1100px] m-auto">
        <h1 className="font-bold text-2xl">Fahad Azhar</h1>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-xl font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Articles</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-3 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Articles</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
