"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {

  let toggle;
  const [isMenuOpen, setIsMenuOpen] = useState(toggle);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); 
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 200); 
  };

  const getLinkClass = (path, path2) => {
    return pathname === path || pathname === path2
      ? "text-[#4FB5B9]"
      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4FB5B9] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-white px-10 dark:bg-black text-xl w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-popins font-bold">
        <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/BrandLogo.png"
              className="mr-2 h-12"
              width={180}
              height={100}
              alt="Logo"
              unoptimized={true}
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse sm:mt-0 mt-4">
            <button className="bg-[#4FB5B9] font-normal font-poppins text-white max-md:hidden  py-2 px-4 rounded hover:bg-[#44ABB6]">
              <Link href="/contact"> Contact Us</Link>
            </button>

            {/* <ThemeToggle /> */}
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center ${isMenuOpen ? "flex" : "hidden"
              } w-full md:flex md:w-auto md:order-1 justify-center`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col w-full p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 font-poppins font-normal ${getLinkClass(
                    "/"
                  )}`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0  font-poppins font-normal ${getLinkClass(
                    "/about"
                  )}`}
                >
                  About
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="#"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 font-poppins font-normal ${getLinkClass(
                    "/pharmaservices", "/softwareservices"
                  )}`}
                >
                  Our Services
                </Link>

                <ul
                  className={`absolute z-30 left-0 mt-2 p-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 transition-opacity duration-200 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link
                      href="/pharmaservices"
                      className={`block font-poppins text-sm font-light px-4 py-2 hover:bg-gray-100 ${getLinkClass(
                        "/pharmaservices"
                      )}`}
                    >
                      Pharma Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/softwareservices"
                      className={`block px-4 py-2 text-sm font-poppins font-light hover:bg-gray-100 ${getLinkClass(
                        "/softwareservices" 
                      )}`}
                    >
                      Software Services
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
