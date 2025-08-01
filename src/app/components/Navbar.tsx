"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can use any icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-amber-400 shadow">
      <div className="flex justify-between items-center px-4 py-3 max-w-[1600px] m-auto">
        <h1 className="font-bold text-xl">Fahad Azhar</h1>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-amber-300">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
