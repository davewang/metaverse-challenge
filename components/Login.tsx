import Image from "next/image";
import { useMoralis } from "react-moralis";
function Login() {
    const { authenticate } = useMoralis();
    return <div className=" bg-black relative">
        <h1>I am the login screen</h1>
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
            {/** Papa logo */}
            <Image className=" rounded-full" src='http://oss.iapploft.net/test1/3ic.png' width={200} height={200} objectFit="cover" />

            {/** login button  */}
            <button className=" bg-yellow-500 rounded-lg p-5 font-bold animate-pulse" onClick={() => authenticate()}>Login to the META</button>
        </div>
        <div className=" w-full h-screen">
            <Image src='http://oss.iapploft.net/test1/u55.jpeg' layout="fill" objectFit="cover" />
        </div>
    </div>;
}

export default Login;
