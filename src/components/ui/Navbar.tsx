// components/ui/Navbar.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Menu, Search } from "lucide-react";
import Button from "./Button";
import Modal from "./Modal";
import Text from "./Text";
// import Input from "./Input";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
      if (
        (isMac && e.metaKey && e.key === "k") ||
        (!isMac && e.ctrlKey && e.key === "k")
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 p-4">
      <div className="relative z-10 border-[3px] border-gray-900 bg-[#fff4da] rounded-xl flex items-center justify-between px-4 py-3 gap-4">
        {/* Sidebar trigger */}
        <Button size="ico" variant="cancel" onClick={onToggleSidebar}>
          <Menu />
        </Button>

        {/* Logo - absolute centered, clickable, responsive */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center hover:opacity-80 transition-opacity"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="mx-auto p-0"
            />
            <p className="font-semibold text-sm p-0">natsuki Studio.</p>
          </div>
        </Link>

        {/* Search Bar PC */}
        <div className="hidden sm:flex items-center gap-2 p-2 sm:max-w-[160px] md:max-w-[380px]">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="搜尋…（Ctrl/Cmd + K）"
            className="w-full px-4 py-2 rounded border-[3px] border-gray-900 bg-white text-base focus:outline-none"
          />
          <Button size="ico" type="submit">
            <Search />
          </Button>
        </div>
        {/* Search Bar Mobile */}
        <div className="sm:hidden flex items-center gap-2 p-2">
          <Button size="ico" onClick={() => setSearchOpen(true)}>
            <Search />
          </Button>
          <Modal open={searchOpen} onClose={() => setSearchOpen(false)}>
            <Text variant="title" className="text-center">
              搜尋
            </Text>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="搜尋…"
              className="w-full px-4 py-2 rounded border-[3px] border-gray-900 bg-white text-base focus:outline-none"
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
