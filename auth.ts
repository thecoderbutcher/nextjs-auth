import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import {db} from '@/lib/db';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from '@/data/user'; 
import { UserRole } from '@prisma/client';

declare module "@auth/core" {
    interface session{
        user:{
            role: string,
        }  
    }
}

export const {
    handlers: {GET, POST}, 
    auth, 
    signIn, 
    signOut
} = NextAuth({
    pages:{
        signIn: '/auth/login',
        error: '/auth/error',
    },
    events:{
        async linkAccount({user}){
            await db.user.update({
                where: {id: user.id},
                data: {emailVerified: new Date()}
            })
        }
    },
    callbacks:{
        /* async signIn({ user }){
            const existingUser = user.id ? await getUserById(user.id): false;

            if(!existingUser || !existingUser.emailVerified){
                return false;
            }
            return true;
        }, */
        async session({token, session}){
            if(token.sub && session.user){
                session.user.id = token.sub;
            }

            if(token.role && session.user){
                session.user.role = token.role as UserRole;
            }
            return session;
        },
        async jwt({token}){
            if(!token.sub) return token;

            const existingUser = await getUserById(token.sub)
            if(!existingUser) return token;

            token.role = existingUser.role;
            console.log(token);
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})
