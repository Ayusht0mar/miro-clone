import { signIn } from "@/auth"
import Image from "next/image"
 
export function SignIn() {
  return (
    <div className="space-y-4">
        <form
        action={async () => {
            "use server"
            await signIn("github", { redirectTo: `/dashboard` })
        }}
        >
        <button type="submit" className="bg-white border text-lg py-2 px-8 rounded-md w-full hover:bg-black/50 hover:text-white flex gap-4 items-center">
          <Image src="/images/github-logo.png" alt="Google logo" width={20} height={20}/>
          Sign in with github
        </button>
        </form>
        <form
        action={async () => {
            "use server"
            //Todo : redirect to the personal dashboard
            await signIn("google", { redirectTo: `/dashboard` })
        }}
        >
        <button type="submit" className="bg-white border text-lg py-2 px-8 rounded-md w-full hover:bg-black/50 hover:text-white flex gap-4 items-center">
          <Image src="/images/google-logo.png" alt="Google logo" width={20} height={20}/>
          Sign in with google  
        </button>
        </form>

    </div>
  )
}