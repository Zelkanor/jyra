import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-3xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={50} width={50} alt="Logo" />
          <Button variant="secondary">Sign Up</Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
