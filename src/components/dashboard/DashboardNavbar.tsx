import Image from "next/image";
import { SignOut } from "../auth/SignOutButton";

const DashboardNavbar = () => {
    return ( 
        <div className="bg-white w-full py-4 px-6 border-b border-gray-100 flex justify-between">
            <Image
                src="/images/mirologo.svg"
                alt="Miro Logo"
                width={68}
                height={30}
            />
            <SignOut/>
        </div>
     );
}
 
export default DashboardNavbar;