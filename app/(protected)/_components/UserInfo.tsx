import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExtendedUser } from "@/next-auth" ;

interface UserInfoProps {
    user?: ExtendedUser;
    label: string
}

export const UserInfo = ({user, label}: UserInfoProps) => {
    return (
        <Card className="w-full shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    {label}
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        ID
                    </p>
                    <p className="truncate text-xm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.id}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Name
                    </p>
                    <p className="text-xm max-w-[280px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.name}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Email
                    </p>
                    <p className="text-xm max-w-[280px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.email}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}