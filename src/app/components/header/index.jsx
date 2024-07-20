"use client";

import Image from "next/image";
import logo from "@/app/components/header/assets/logo.svg";
import { HEADER_MENU_ITEMS } from "@/app/components/header/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState({
    show: false,
  });
  const router = useRouter();
  return (
    <header className="h-[96px] w-full bg-background flex items-center px-4 fixed top-0 border-b border-b-black">
      <Image className="size-12" src={logo} alt="logo" />
      <nav className="grow h-full hidden lg:flex items-center text-white text-base font-semibold justify-center">
        <ul className="flex gap-12 [&>li]:border-b-4 [&>li]:border-b-transparent [&>li]:h-full [&>li]:flex h-full [&>li>a]:m-auto">
          {HEADER_MENU_ITEMS.map((item) => {
            return (
              <li
                key={item.link}
                className={twMerge(
                  "group hover:border-b-blue transition-colors ease-in-out",
                  pathname === item.link
                    ? "!border-b-blue border-b-4"
                    : "border-b-transparent"
                )}
              >
                <Link href={item.link} className="relative z-10">
                  {item.title}
                </Link>
                {item.subMenu && (
                  <ul className="absolute left-0 right-0 top-full bg-background hidden group-hover:flex w-full flex-col text-black shadow-lg border-y border-y-black">
                    <div className="w-full flex justify-center">
                      <div className="w-full px-6 py-4">
                        {item.subMenu(item)}
                      </div>
                    </div>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <button className="lg:hidden ml-auto" onClick={() => setIsMenuOpen(true)}>
        <Menu color="#fff" size={30} />
      </button>
      {isMenuOpen && (
        <div className="lg:hidden h-screen flex flex-col bg-black w-full fixed inset-0 px-6 py-4 text-white">
          <button
            className="ml-auto"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <X size={30} />
          </button>
          <ul className="flex flex-col gap-4 text-2xl font-semibold mt-8">
            {HEADER_MENU_ITEMS.map((item) => (
              <li key={item.link}>
                <button
                  className="text-3xl flex justify-between items-center"
                  onClick={() => {
                    if (item?.responsiveSubMenu) {
                      setIsSubMenu({
                        show: true,
                      });
                      return;
                    } else {
                      router.push(item.link);
                    }
                  }}
                >
                  {item.title} {item?.responsiveSubMenu && <ChevronRight />}
                </button>
                <hr className="border-b border-white mt-3" />
                {isSubMenu.show && item?.responsiveSubMenu && (
                  <ul className="absolute z-50 h-screen left-0 right-0 top-0 bg-background flex w-full flex-col text-white">
                    <div className="w-full flex justify-center pb-4">
                      <div className="w-full px-6 py-4">
                        {item?.responsiveSubMenu({
                          onClose: () => {
                            setIsSubMenu({
                              show: false,
                              item: null,
                            });
                          },
                        })}
                      </div>
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
