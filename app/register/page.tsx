import AppNavBar from "@/components/app-nav";
import GridPattern from "@/components/grid-pattern";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="relative z-50 flex min-h-screen flex-col w-full bg-gradient-to-tr from-[#18191c] to-[#000000] items-center justify-center p-20">
      <div
        style={{ borderRadius: 7 }}
        className="w-[30%] relative z-50 py-10 px-5 bg-[#1d1d1d]"
      >
        <h4 className="text-3xl text-white tracking-tighter font-bold">
          Create an account
        </h4>
        <div className="max-w-sm py-2">
          <p className="text-base text-white/75">
            Already have an account.{" "}
            <Link href={"/login"} className="text-[#8082f8]">
              Sign In
            </Link>
          </p>
        </div>
        <div className="flex my-5 items-center mb-10 space-x-4">
          <Button
            className="h-11 border-white/40 bg-transparent text-white"
            variant={"outline"}
          >
            <Image
              src={require("../../app/public/7123025_logo_google_g_icon.svg")}
              height={35}
              width={35}
              className="mr-1"
              alt=""
            />
            Sign up with Google
          </Button>
          <Button
            className="h-11 border-[#404040] bg-transparent text-white"
            variant={"outline"}
          >
            <Image
              src={require("../../app/public/fb.svg")}
              height={28}
              width={28}
              className="mr-2"
              alt=""
            />
            Sign up with Facebook
          </Button>
        </div>
        <div className="grid w-full items-center text-white my-5 gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            className="bg-[#2b2b2b] h-11 focus-visible:ring-offset-indigo-500  border-[#404040] text-white/65"
            id="email"
            placeholder="eric@example.com"
          />
        </div>
        <div className="grid w-full items-center text-white my-5 gap-1.5">
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            className="bg-[#2b2b2b] h-11 focus-visible:ring-offset-indigo-500  border-[#404040] text-white/65"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="my-3 flex justify-between items-center w-full">
          <div className="flex items-center my-3 space-x-2 text-white">
            <Checkbox id="terms" className="w-5 h-5" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>
        <div className="mt-10" />
        <Button className="bg-[#6366f1] w-full h-11 z-40 text-white/90 hover:bg-[#6f71ea]">
          Sign in
        </Button>
      </div>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
