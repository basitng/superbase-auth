import AppNavBar from "@/components/app-nav";
import GridPattern from "@/components/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="relative z-50 flex min-h-screen flex-col w-full bg-gradient-to-tr from-[#18191c] to-[#000000] items-center justify-center p-20">
      <AppNavBar />
      <h1 className="z-10 whitespace-pre-wrap text-center text-8xl font-extrabold tracking-tighter text-white dark:text-white">
        Home{" "}
        <span className="bg-gradient-to-tr text-transparent from-[#6366f1] to-pink-500 bg-clip-text">
          Page
        </span>
      </h1>
      <div className="max-w-3xl text-center my-5">
        <p className="text-base font-normal text-white">
          Only authenticated users are allowed access; if you are not
          authenticated, we regret to inform you that entry is strictly
          prohibited. We apologize for any inconvenience this may cause.
        </p>
      </div>
      <Button className="bg-white h-11 z-40 text-black/60 hover:bg-white/95">
        Logout
      </Button>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
