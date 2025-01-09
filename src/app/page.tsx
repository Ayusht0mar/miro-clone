import { SignOut } from "@/components/auth/SignOutButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-6">
      <div className="bg-white mx-auto w-[92vw] p-4 rounded-xl flex justify-between items-center shadow-lg ">
        <div className="flex gap-4 items-center">
          <Image
            src={"/images/mirosymbol.svg"}
            alt="Miro Symbol"
            height={40}
            width={40}
          />
          <Image
            src={"/images/mirologo.svg"}
            alt="Miro logo"
            height={40}
            width={72}
          />
        </div>
        <div>
          <a href="/signin" className="text-white bg-blue-500 px-4 py-2 rounded-lg">   
              Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
