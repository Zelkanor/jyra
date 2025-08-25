import { redirect } from "next/navigation";
import React from "react";

import { getCurrent } from "@/features/auth/action";
import SignInCard from "@/features/auth/components/sign-in-card";

export default async function SignIn() {
  const user = await getCurrent();
  if (user) {
    redirect("/");
  }
  return (
    <div>
      <SignInCard />
    </div>
  );
}
