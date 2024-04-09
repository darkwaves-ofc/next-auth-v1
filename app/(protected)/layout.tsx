import { getServerSession } from "next-auth";
import { Navbar } from "./_components/navbar";
import { authOptions } from "@/auth";
import { useRouter } from "next/navigation";
import { NextAuthProvider } from "@/providers/NextAuthProvider";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await getServerSession(authOptions);
  return (
    <NextAuthProvider session={session} type="private">
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Navbar />
        {children}
      </div>
    </NextAuthProvider>
  );
};

export default ProtectedLayout;
