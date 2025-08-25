import Image from "next/image";
import Link from "next/link";
import React from "react";

import DottedSeperator from "./dotted-separator";
import Navigation from "./navigation";

const Sidebar = () => {
  return (
    <aside className="h-full bg-background p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={44} height={20} />
      </Link>
      <DottedSeperator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
