import { redirect } from "next/navigation";
import React from "react";

import { getCurrent } from "@/features/auth/action";
import SignUpCard from "@/features/auth/components/sign-up-card";

const page = async () => {
  const user = await getCurrent();
  if (user) {
    redirect("/");
  }
  return <SignUpCard />;
};

export default page;
