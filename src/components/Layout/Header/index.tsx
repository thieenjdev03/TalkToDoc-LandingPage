"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  // Thêm useEffect để theo dõi thay đổi pathUrl và đóng sidebar
  useEffect(() => {
    setNavbarOpen(false);
  }, [pathUrl]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        signUpRef.current &&
        !signUpRef.current.contains(event.target as Node)
      ) {
        setIsSignUpOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignUpOpen, navbarOpen]);

  const handleSignIn = () => {
    router.push(process.env.NEXT_PUBLIC_DASHBOARD_URL || "/");
  };

  return (
    <header
      style={{
        backgroundColor: "#E3F0FF", 
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"
      }}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        sticky ? " shadow-lg bg-white dark:bg-gray-600 py-2 sm:py-4" : "shadow-none py-3 sm:py-6"
      }`}
    >
      <div className="py-1 sm:py-2 lg:py-0">
        <div className="mx-auto px-3 sm:px-4 lg:px-8 lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between">
          <Logo
            width={150}
            height={45}
            className="sm:w-[200px] sm:h-[60px]"
          />
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 flex-row">
            <Link href="#" className="hidden sm:block text-sm lg:text-lg font-medium hover:text-primary">
              <Icon
                icon="solar:phone-bold"
                className="text-primary text-lg sm:text-xl lg:text-2xl inline-block me-1 sm:me-2"
              />
              <span className="hidden md:inline">0123456789</span>
              <span className="md:hidden">0123</span>
            </Link>
            <button
              onClick={handleSignIn}
              className="hidden lg:block text-primary bg-secondary hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full"
            >
              Đăng Nhập
            </button>
            <button
              onClick={() => setIsSignUpOpen(true)}
              className="hidden lg:block bg-primary text-white hover:bg-secondary hover:text-white font-medium text-lg py-4 px-8 rounded-full"
            >
              Đăng Ký
            </button>
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
                <div
                  ref={signUpRef}
                  className="bg-white relative mx-auto w-full max-w-sm sm:max-w-xl overflow-hidden rounded-lg bg-dark_grey bg-opacity-90 backdrop-blur-md px-3 sm:px-4 lg:px-8 pt-12 sm:pt-14 pb-6 sm:pb-8 text-center mt-2 sm:mt-4 mb-2 sm:mb-4"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-8 sm:top-10 right-3 sm:right-4 mr-2 sm:mr-4 lg:mr-8 mt-6 sm:mt-8 dark:invert bold text-xl sm:text-2xl"
                    aria-label="Close Sign Up Modal"
                  >
                    x
                  </button>
                  <SignUp setIsSignUpOpen={setIsSignUpOpen}/>
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-1.5 sm:p-2 rounded-lg bg-primary"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-5 sm:w-6 h-0.5 bg-white"></span>
              <span className="block w-5 sm:w-6 h-0.5 bg-white mt-1 sm:mt-1.5"></span>
              <span className="block w-5 sm:w-6 h-0.5 bg-white mt-1 sm:mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setNavbarOpen(false)}
          />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white bg-darkmode shadow-lg transform transition-transform duration-300 max-w-[280px] sm:max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-3 sm:p-4">
            <h2 className="text-base sm:text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo width={120} height={36} className="sm:w-[150px] sm:h-[45px]" />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close menu Modal"
            >
              <Icon 
                icon="solar:close-circle-bold" 
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-3 sm:p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-3 sm:mt-4 flex flex-col space-y-3 sm:space-y-4 w-full">
              <button
                onClick={() => {
                  handleSignIn();
                  setNavbarOpen(false);
                }}
                className="bg-transparent border border-primary text-primary px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white text-sm sm:text-base"
              >
                Đăng Nhập
              </button>
              <button
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
                className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
              >
                Đăng Ký
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
