'use server';
import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validateFields = ResetSchema.safeParse(values);

    if(!validateFields.success){
        return { error: "Invalid email!"};
    }

    const { email } = validateFields.data;
    const existingUser = await getUserByEmail(email);

    if(!existingUser){
        return {error: "Email not found!"};
    }

    //TODO: generate token an sent mail
    

    return {success: "Reset email sent!"}
}