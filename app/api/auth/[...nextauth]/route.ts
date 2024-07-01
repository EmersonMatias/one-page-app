import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handler =  NextAuth({ 
    providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })],
    callbacks: {
        async redirect(){
            return ("http://localhost:3000/filmes")
        }
    }
})

export { handler as GET, handler as POST }
