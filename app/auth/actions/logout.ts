'use server';
import {signOut} from '@/auth';

export const logout = async () => {
    // Server future stuff
    await signOut();
}