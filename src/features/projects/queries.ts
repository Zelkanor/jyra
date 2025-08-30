import { DATABASE_ID, PROJECTS_ID } from "@/config";
import { createSessionClient } from "@/lib/appwrite";

import { Project } from "./types";
import { getMembers } from "../members/utils";

interface GetProjectProps {
  projectId: string;
}
export const getProject = async ({ projectId }: GetProjectProps) => {
  const { databases, account } = await createSessionClient();
  const user = await account.get();

  const project = await databases.getDocument<Project>(
    DATABASE_ID,
    PROJECTS_ID,
    projectId
  );

  const members = await getMembers({
    databases,
    userId: user.$id,
    workspaceId: project.workspaceId,
  });
  if (!members) {
    throw new Error("Unauthorized");
  }

  return project;
};
