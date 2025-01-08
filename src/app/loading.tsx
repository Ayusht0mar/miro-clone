import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex min-h-screen justify-center items-center">
            <Image src="/images/mirosymbol.svg" alt="Miro Logo" height={80} width={80} />
        </div>
    )
  }