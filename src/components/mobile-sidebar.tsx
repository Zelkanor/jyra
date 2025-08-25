"use client";

import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import Sidebar from "./sidebar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileSidebar = () => {
  const [isOpen, setOpen] = React.useState(false);
  const pathName = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" className="lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
