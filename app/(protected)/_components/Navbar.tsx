'use client';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "./UserButton";

const Navbar = () => {
    const session = useSession();
    const logout = () => {signOut()}
    const pathname = usePathname();
    return ( 
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-full shadow-sm">
            <div className="flex gap-x-2">
                <Button asChild variant={pathname === "/client" ? "default":"outline"}>
                    <Link href="/client">
                        Client
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/settings" ? "default":"outline"}>
                    <Link href="/setting">
                        Setting
                    </Link>
                </Button>
            </div>
                <UserButton />
        </nav>
    );
}

export default Navbar;