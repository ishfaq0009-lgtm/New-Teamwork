import React from "react";
import { Link } from "react-router-dom";

let Sidebar = () => {
  let navLinks = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "" },
    { name: "Login", path: "" },
    { name: "Product Create", path: "" },
    { name: "All Products", path: "" },
    { name: "Category", path: "" },
    { name: "All Category", path: "" },
    { name: "Brand", path: "" },
    { name: "All Brand", path: "" },
    { name: "Order", path: "" },
    { name: "All Order", path: "" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 border-r border-blue-700/40 flex flex-col z-50 text-white shadow-2xl">

      <div className="px-7 py-7 border-b border-blue-700/40">

        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-xl font-bold">L</span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              LUXE
            </h1>

            <p className="text-[9px] text-blue-300 uppercase tracking-[0.35em]">
              E-Commerce
            </p>
          </div>
        </div>

      </div>

      <div className="flex-1 px-4 py-7 overflow-y-auto">

        <p className="text-[10px] text-blue-400 uppercase tracking-[0.3em] px-3 mb-5">
          Main Menu
        </p>

        <div className="flex flex-col gap-2">

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className="group relative flex items-center gap-4 px-4 py-3.5 rounded-xl text-[11px] font-medium uppercase tracking-[0.12em] text-blue-100 hover:text-white hover:bg-blue-700/50 transition-all duration-300">
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-5 py-5 border-t border-blue-700/40">
        <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg shadow-blue-900/40 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
          <span>✦</span>
          Shop Now
        </button>
        <p className="text-center text-[9px] text-blue-500 mt-5 tracking-[0.15em]">
          PREMIUM E-COMMERCE
        </p>
      </div>
    </div>
  );
};

export default Sidebar;