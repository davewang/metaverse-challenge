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
            <button onClick={authenticate} className=" bg-yellow-500 rounded-lg p-5 font-bold animate-pulse" >Login to the META</button>
        </div>
        <div className=" w-full h-screen">
            {/**http://links.papareact.com/55n?=2 http://oss.iapploft.net/assets/users/91155/post/origin/img/27d36390-7c47-11ec-97d2-0f791bc2cd2e.jpg?x-oss-process=image/resize,w_360 */}
            <Image src='http://oss.iapploft.net/test1/u55.jpeg' layout="fill" objectFit="cover" />
        </div>
    </div>;
}

export default Login;
