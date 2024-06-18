import { getOneUser } from '@/utils/fetchFunctions'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

//console.log("ZZZ: ", process.env.GOOGLE_CLIENT_ID)
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("callbacks:: ", " user: ", user, " , account: ", account, " , profile: ",profile, " , email: ",  email, ", credentials: ",  credentials)
      if (user?.email) {
        const checkUser = await getOneUser(user.email)
        console.log("checkUser: ", await checkUser)
        if (checkUser) {
          return Promise.resolve(true)
        }else {
        // Return false to display a default error message
        return Promise.resolve(false)
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
        }
      } 
      return Promise.resolve(false);
    },
    async redirect({ url= "controlPanel", baseUrl = "localhost://:3000" }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  theme: {
    colorScheme: "dark",
    buttonText: "" // Hex color code
  }
  /* pages: {
    signIn: '/signin',
  }, */
})

export { handler as GET, handler as POST }

