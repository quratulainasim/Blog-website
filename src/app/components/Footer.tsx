import React from "react";
import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
function Footer() {
  return (
    <>
<div className="bg-gray-500">
  <div className="container px-5 py-1 mx-auto flex items-center justify-between sm:flex-row flex-col ">
   
    <p className="text-xl text-slate-50 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-1 mt-2">© Created by Quratulain 
    </p>
    <ul className="flex gap-x-4 text-slate-50 font-serif font-semibold items-center sm:mt-0 mt-4">
        <li>
          <Link className="hover:text-gray-300 text-2xl" href="https://x.com"><FiTwitter /></Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 text-2xl"href="https://www.linkedin.com"><CiLinkedin /></Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 text-2xl" href="https://www.facebook.com"><CiFacebook /></Link>
        </li>
      </ul>
  </div>
</div>
    </>
  );
}

export default Footer;
