'use client';

import { logout } from "../actions/logout";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({children}: LogoutButtonProps) => {
    const logOut = () => {
        logout()
    }
    return (
        <span onClick={logOut} className="cursor-pointer">
            {children}
        </span>
    )
}