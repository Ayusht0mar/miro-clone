import { auth } from "@/auth";
import { SignIn } from "@/components/auth/SignInButton";
import { redirect } from "next/navigation";

export default async function SignInPage () {
        
    const session = await auth()
    if (session) return redirect("/dashboard/")

    return ( 
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-6">Sign In Page</h1>
            <SignIn/>
        </div>
     );
} 
