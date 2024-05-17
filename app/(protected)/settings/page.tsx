'use client';

import { UserInfo } from "../_components/UserInfo";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPages = () => { 
    const user  = useCurrentUser();
    return (
        <>  
            <UserInfo
                label="User profile"
                user={user}
            >

            </UserInfo>
        </>
    );
}
export default SettingsPages;