import NextAuth from "next-auth"
import KeycloakProvider from 'next-auth/providers/keycloak';
import {calculateSizeAdjustValues} from 'next/dist/server/font-utils';

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  secret: process.env.AUTH_SECRET, // Explicitement défini
  providers: [
    KeycloakProvider({
	 clientId: process.env.KEYCLOAK_ID || 'my-app-client',
	 clientSecret: process.env.KEYCLOAK_SECRET || 'mrkyYC7aR5WZoxfsCcAQ1CMSudO0OM4N',
	 issuer: process.env.KEYCLOAK_ISSUER || 'http://localhost:9090/realms/master',
    })
  ],
  callbacks: {
    async signIn({user, account, profile, email, credentials}) {
	 console.log('user : ', user);
	 console.log('account : ', account);
	 console.log('profile : ', profile);
	 return true
    },
    async redirect({url, baseUrl}) {
	 return baseUrl
    },
    async session({session, user, token}) {
	 console.log('session : ', session);
	 return session
    },
    async jwt({token, user, account, profile, isNewUser}) {
	 return token
    }
  }
}


export const {handlers, auth, signIn, signOut} = NextAuth(config)
