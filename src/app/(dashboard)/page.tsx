import { redirect } from "next/navigation";
import React from "react";

import { getCurrent } from "@/features/action";
import { UserButton } from "@/features/auth/components/user-button";

export default async function Home() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div>
      <UserButton />
    </div>
  );
}
