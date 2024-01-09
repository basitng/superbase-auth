import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Mail, MoveRight } from "lucide-react";

export default function AppNavBar() {
  return (
    <div className="w-full absolute z-50 py-8 top-0 left-0 flex justify-around items-center">
      <h5 className="text-white tracking-tighter text-3xl font-bold">
        SupaAuth
      </h5>

      <div className="flex items-center space-x-7">
        <Link href="/login">
          <span className="text-white text-base">Login</span>
        </Link>
        <Button variant={"outline"} className="z-40 bg-transparent text-white">
          <Mail className="w-5 h-5 mr-2" />
          ajagatobby@gmail.com
        </Button>
      </div>
    </div>
  );
}
