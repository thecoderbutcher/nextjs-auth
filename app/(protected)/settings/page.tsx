import {auth,signOut} from '@/auth'; 
const SettingsPages = async() => {
    const session = await auth();
    return (
        <>
            {JSON.stringify(session)}
            <form action={async () => {
                'use server'
                await signOut();
            }}>
                <button type='submit'>log out</button>
            </form>
        </>
    );
}
export default SettingsPages;