import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth, { Session, TokenSet } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import PatreonProvider from "next-auth/providers/patreon";
import GoogleProvider from "next-auth/providers/google";
import { auth } from '../../../utils/firebase'

export const authOptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                .then(userCredential => {
                    if(userCredential.user) {
                        return userCredential.user;
                    }
                    return null;
                })
                .catch(error => console.log(error))
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                    scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
                    redirect_uri: "https://brainbase.fly.dev/api/auth/callback/google"
                }
            }
        }),
        PatreonProvider({
            clientId: process.env.PATREON_ID as string,
            clientSecret: process.env.PATREON_SECRET as string,
            authorization: {
               params: {
                  redirect_uri: "https://brainbase.fly.dev/api/auth/callback/patreon",
                  scope: "identity identity[email] identity.memberships"
               },
            },
            profile(profile, tokens) {
                return {
                  id: profile.data.id,
                  name: profile.data.attributes.full_name,
                  email: profile.data.attributes.email,
                  image: profile.data.attributes.image_url,
                  sub: profile.sub,
                  tokens: tokens,
                }
            },
        })
    ]
}

export default NextAuth(authOptions);