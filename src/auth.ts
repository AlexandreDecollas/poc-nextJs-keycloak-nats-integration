import NextAuth from "next-auth"
import KeycloakProvider from 'next-auth/providers/keycloak';

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

  ], // rest of your config
}




export const { handlers, auth, signIn, signOut } = NextAuth(config)
