// import { auth } from "@/auth";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export const currentUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};

export const currentRole = async () => {
  const session = await getServerSession(authOptions);

  return session?.user?.role;
};
