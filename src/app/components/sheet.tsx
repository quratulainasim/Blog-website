"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
            <IoMdMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
          <div>
          <nav className="flex flex-col gap-1 items-center text-slate-500 font-bold text-xl justify-center">
          <Link className="mr-5 hover:text-gray-300" href="/">Home</Link>
          <Link className="mr-5 hover:text-gray-300" href="/blogs">Blogs</Link>
          <Link className="mr-5 hover:text-gray-300" href="/contact">Contact</Link>
          </nav>
            </div>



          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
<IoMdMenu />