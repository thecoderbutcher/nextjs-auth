import {auth} from '@/auth';

const SettingsPages = async() => {
    const session = await auth();
    return (
        <>
            {JSON.stringify(session)}
        </>
    );
}
export default SettingsPages;