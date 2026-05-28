import React from "react";
import DarkModeToggle from "../components/Theme"
import Logout from "../components/Logout";

export default function Navbar() {
  return (
    <div className=" text-white border-b border-white bg-slate-900 dark:bg-black dark:text-white flex justify-end items-center pr-6 h-16 w-full">
      <div className="flex space-x-3">
        <DarkModeToggle />
        <Logout />
      </div>

    </div>
  );
}