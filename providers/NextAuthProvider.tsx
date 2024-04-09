"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { DEFAULT_AUTH_REDIRECT, DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const NextAuthProvider = ({
  children,
  type,
  session,
}: {
  children: React.ReactNode;
  type: "private" | "public";
  session: Session | null;
}) => {
  // if (!session)
  const router = useRouter();
  //   const session = useSession();
  if (type === "private") {
    if (!session || !session.user) {
      router.push(DEFAULT_AUTH_REDIRECT);
    }
  } else if (type === "public") {
    if (session && session.user) {
      router.push(DEFAULT_LOGIN_REDIRECT);
    }
  }
  console.log({ session });
  return <SessionProvider>{children}</SessionProvider>;
};
