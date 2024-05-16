'use client';
import { useSession, signOut } from "next-auth/react"; 
const SettingsPages = () => {
    const session = useSession();
    const onClick = () => {
        signOut()
    }
    return (
        <>  
            <button onClick={onClick} type='submit'>log out</button> 
        </>
    );
}
export default SettingsPages;