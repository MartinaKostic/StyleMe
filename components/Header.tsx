"use client";
import LoginContext from "@/context/loginContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Header = () => {
  const pathname = usePathname();
  const loginContext = useContext(LoginContext);

  return (
    <div className="absolute w-full h-20 bg-transparent top-0 z-50 ">
      <div className=" sm:hidden lg:flex justify-between px-4 h-full w-full items-center text-2xl">
        <p>styleme</p>
        <ul className="flex gap-x-6 text-lg">
          <li className={`mx-3 ${pathname === "/" ? "active" : ""}`}>
            <Link href="/" className="">
              <p className="nav-link">home</p>
            </Link>
          </li>
          <li className={`mx-3 ${pathname === "/quiz" ? "active" : ""}`}>
            <Link href="/quiz">
              <p className="nav-link">quiz</p>
            </Link>
          </li>
          <li className={`mx-3 ${pathname === "/styleinspo" ? "active" : ""}`}>
            <Link href="/styleinspo">
              <p className="nav-link">style inspo</p>
            </Link>
          </li>
          <li className={`mx-3 ${pathname === "/blog" ? "active" : ""}`}>
            <Link href="/blog">
              <p className="nav-link">blogs</p>
            </Link>
          </li>
          {loginContext.isLogin ? (
            <li
              className="mx-3"
              onClick={() => {
                localStorage.removeItem("authenticatedUser");
                loginContext.setIsLogin(false);
              }}
            >
              <Link href="/signin">
                <p className="nav-link">sign out</p>
              </Link>
            </li>
          ) : (
            <>
              <li className={`mx-3 ${pathname === "/signup" ? "active" : ""}`}>
                <Link href="/signup">
                  <p className="nav-link">sign up</p>
                </Link>
              </li>
              <li className={`mx-3 ${pathname === "/signin" ? "active" : ""}`}>
                <Link href="/signin">
                  <p className="nav-link">sign in</p>
                </Link>
              </li>
            </>
          )}

          <li className={`mx-3 ${pathname === "/contactus" ? "active" : ""}`}>
            <Link href="/contactus">
              <p className="nav-link">contact us</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
