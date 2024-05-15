"use client";  

import { useCallback, useEffect, useState} from "react";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/app/auth/actions/newVerification";
import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";
import { CardWrapper } from "@/app/auth/components/card-wrapper";
import { PuffLoader } from 'react-spinners';

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const onSubmit = useCallback(() => {
        if(success || error) return;
        if(!token) {
            setError('Missing token!');
            return;
        }

        newVerification(token)
        .then((data) => {
            setSuccess(data.success);
            setError(data.error);
        })
        .catch(() => {
            setError('Something went wrong!"')
        })
    }, [token, success, error]);

    useEffect(() => {
        onSubmit()
    }, [onSubmit])
    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex w-full justify-center items-center ">
                {!success && !error && (<PuffLoader/>)}
                <FormSuccess message={success}/>
                
                { !success && (
                    <FormError message={error}/>
                )}
                    
            </div>
        </CardWrapper>
    )
}