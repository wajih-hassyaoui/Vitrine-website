"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white py-4! shadow-sm transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 flex items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Logo Left */}
        <div className="flex items-center xl:w-auto">
          <a href="/">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={90}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={95}
              height={30}
              className="w-full dark:hidden"
            />
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          aria-label="hamburger Toggler"
          className="block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="absolute right-0 block h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "w-full! delay-300" : "w-0"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "delay-400 w-full!" : "w-0"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "w-full! delay-500" : "w-0"
                }`}
              ></span>
            </span>
            <span className="du-block absolute right-0 h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "h-0! delay-0" : "h-full"
                }`}
              ></span>
              <span
                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "h-0! delay-200" : "h-0.5"
                }`}
              ></span>
            </span>
          </span>
        </button>

        {/* Nav and Theme Toggler */}
        <div
          className={`invisible absolute right-0 top-full mt-2 w-full items-start xl:relative xl:top-auto xl:mt-0 xl:flex xl:h-auto xl:w-auto xl:visible xl:items-center ${
            navigationOpen &&
            "navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-custom"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-custom"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-custom">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-custom font-semibold"
                          : "hover:text-custom"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme toggler right side */}
          <div className="mt-7 flex items-center gap-6 xl:mt-0 xl:ml-6">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
