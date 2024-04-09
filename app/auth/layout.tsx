import { authOptions } from "@/auth";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <NextAuthProvider session={session} type="public">
      <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        {children}
      </div>
    </NextAuthProvider>
  );
};

export default AuthLayout;
