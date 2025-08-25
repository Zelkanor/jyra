import { redirect } from "next/navigation";
import React from "react";

import { getCurrent } from "@/features/auth/action";

export default async function Home() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }
  return <div>This is a homepage</div>;
}
