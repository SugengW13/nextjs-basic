import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@/libs/prisma";
import {compare} from "bcrypt-ts";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  // pages: { signIn: '/' },
  // callbacks: {
  //   async session({ session, user }) {
  //     return session
  //   }
  // },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) return  null

        const isPasswordMatch = await compare(credentials.password, user.password)

        if (!isPasswordMatch) return null

        return {
          id: user.id.toString(),
          email: user.email
        }
      }
    })
  ]
}