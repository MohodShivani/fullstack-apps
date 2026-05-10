import React from "react";
import DarkModeToggle from "../components/Theme"
import Logout from "../components/Logout";

export default function Navbar() {
  return (
    <div className=" text-white bg-slate-900  flex justify-end items-center pr-6 h-16 w-full">
      <div>
        <Logout />
      </div>

    </div>
  );
}