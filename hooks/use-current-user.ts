import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();
  if (session.status !== "loading") {
    return { user: session.data?.user, status: session.status };
  } else return { status: session.status };
};
