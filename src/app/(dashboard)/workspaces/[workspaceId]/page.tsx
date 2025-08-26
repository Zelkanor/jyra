import { redirect } from "next/navigation";
import React from "react";

import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>Workspaces create</div>;
};

export default WorkspaceIdPage;
