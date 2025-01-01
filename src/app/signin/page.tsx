import { SignIn } from "@/components/auth/SignInButton";

const SignInPage = () => {
    return ( 
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-6">Sign In Page</h1>
            <SignIn/>
        </div>
     );
}
 
export default SignInPage;