import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
    const { user, logout } = useMoralis();
    return (<div className=" sticky top-0 p-5 z-50 bg-black text-pink-300 border-b-2 border-pink-700">
        <div className=" grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
            <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                <Image objectFit="cover" className=" rounded-full" src="http://oss.iapploft.net/test1/3ic.png" layout="fill"></Image>
            </div>
            <div className=" col-span-4 text-left lg:text-center">

                <div className="relative w-48 h-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar />

                </div>
                <h1 className="text-3xl">欢迎来到源宇宙</h1>

                <h2 className="text-5xl font-bold truncate">{user?.getUsername()}</h2>

                <ChangeUsername />


            </div>
        </div>
    </div>
    );
}

export default Header;
