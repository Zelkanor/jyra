import { redirect } from "next/navigation";
import React from "react";

import { getCurrent } from "@/features/auth/queries";
import EditWorkspaceForm from "@/features/workspaces/components/edit-workspace-form";
import { getWorkspace } from "@/features/workspaces/queries";

interface WorkspaceIdSettingsPageProps {
  params: Promise<{ workspaceId: string }>;
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const { workspaceId } = await params;
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({
    workspaceId: workspaceId,
  });

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
