import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { SheetSide } from "./sheet";
function Header() {
  return (
    <>
      
      <div className="bg-gray-100 h-100vh">
      <div className="container mx-auto flex justify-between  p-2 flex-col md:flex-row items-center">
  <div className="flex items-center ml-1 mb-2 md:mb-0">
    
    <h1 className="ml-1 text-4xl text-slate-500 font-extrabold ">Quratulain</h1>
  </div>
  
  <div className="hidden md:block relative top-2 left-4">
<input className="rounded-2xl py-2 px-2 outline-none  ml-8 text-xs w-[200px] pr-10 hidden md:block" placeholder="Search for items" />
<FaSearch className="text-gray-500 w-5 h-5 absolute right-5 top-2 " />
 </div>
   <div className="hidden md:block">
  <nav className="md:ml-auto flex flex-wrap items-center text-slate-500 font-bold text-xl justify-center">
    <Link className="mr-5 hover:text-gray-300" href="/">Home</Link>
    <Link className="mr-5 hover:text-gray-300" href="/blogs">Blogs</Link>
    <Link className="mr-5 hover:text-gray-300" href="/contact">Contact</Link>
  </nav>
  </div>
  <div className="flex justify-between items-center gap-1 md:hidden">
  <FaSearch className="text-gray-500 text-xl mr-1 " />
  <SheetSide />
  </div>
     </div>
     </div>





    </>
  );
}

export default Header;
