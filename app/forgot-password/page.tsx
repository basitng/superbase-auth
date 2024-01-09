import GridPattern from "@/components/grid-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
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
          Forgot password?
        </h4>
        <div className="max-w-sm py-2">
          <p className="text-base text-white/75">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        <div className="grid w-full items-center text-white my-5 gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            className="bg-[#2b2b2b] h-11 focus-visible:ring-offset-indigo-500  border-[#404040] text-white/65"
            id="email"
            placeholder="eric@example.com"
          />
        </div>

        <div className="mt-5" />
        <Button className="bg-[#6366f1] w-full h-11 z-40 text-white/90 hover:bg-[#6f71ea]">
          <Mail className="mr-2" size={18} />
          Send email
        </Button>
        <div className="mt-10 flex justify-center items-center w-full">
          <Link href={"/login"} className="text-[#8082f8]">
            return to sign in
          </Link>
        </div>
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
