"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-screen-3xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={50} width={50} alt="Logo" />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild variant="secondary">
              <Link href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}>
                {pathName === "/sign-in" ? "Sign Up" : "Sign In"}
              </Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
