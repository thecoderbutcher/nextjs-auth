import { CardWrapper } from '@/app/auth/components/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const ErrorCard = () => {
    return(
        <CardWrapper 
            headerLabel='Oops! Something went wrong!'
            backButtonHref='/auth/login'
            backButtonLabel='Back to login'
        >
            <div className='w-full flex justify-center items-center'>
                <ExclamationTriangleIcon className=' text-[#ffd13b] size-14 drop-shadow-md'/>
            </div>
        </CardWrapper>
    )
}