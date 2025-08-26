import { redirect } from "next/navigation";
import React from "react";

import SignInCard from "@/features/auth/components/sign-in-card";
import { getCurrent } from "@/features/auth/queries";

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
