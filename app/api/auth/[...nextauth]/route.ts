import { authOptions } from "@/auth";
import NextAuth from "next-auth";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
//     update,
//   } = authOptions;
  