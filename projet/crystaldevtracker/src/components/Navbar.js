import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-screen h-20 bg-black fixed top-0">
        <div className="px-4 h-full flex items-center justify-between">
          <ul className="hidden lg:flex gap-x-2 text-white">
            <li>
              <Link href="/about">
                <button className="text-white btn">
                  <p>Aide</p>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/partners">
                <button className="text-white btn">
                  Site des camarades
                </button>
              </Link>
            </li>
          </ul>
          <div className="gap-x-2 flex">
            <Link href="/register">
              <button className="text-white btn">
                S'inscrire
              </button>
            </Link>
            <Link href="/login">
              <button className="text-white btn">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

}

export default Navbar;