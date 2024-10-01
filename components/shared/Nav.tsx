import React from "react";
import { navItems } from "@/data";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
const Nav = () => {
  return (
    <header>
      <nav className="py-6">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-14">
            <span className="font-bold text-slate-800 text-3xl">MED</span>
            <ul className="sm:flex hidden space-x-4 ">
              {navItems.map((item, i) => (
                <li key={i} className="capitalize">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <Button variant={"secondary"} className="hidden sm:block">
            Appointment
          </Button>
          <div className="bg-primary p-2 rounded-full sm:hidden">
            <AiOutlineMenu className=" text-2xl text-white" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
