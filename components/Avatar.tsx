import { useMoralis } from "react-moralis";
import Image from "next/image";
interface Props {
    username?: string | undefined,
    logoutOnPress?: Function | undefined,
}
function Avatar({ username, logoutOnPress }: Props) {
    const { user, logout } = useMoralis();

    return <Image
        className=" rounded-full bg-black hover:opacity-75 cursor-pointer"
        src={`https://avatars.dicebear.com/api/human/${username || user?.getUsername()}.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"></Image>;
}

export default Avatar;
