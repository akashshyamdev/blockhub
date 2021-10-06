import { signIn } from "next-auth/client";
import Image from "next/image";

export default function OAuth() {
  const googleAuth = () => signIn("google", { callbackUrl: "http://localhost:3000/" });

  return (
    <div>
      <button
        className={"flex flex-row items-center px-7 py-5 border border-1 gap-x-3"}
        onClick={googleAuth}
      >
        <Image className={"mr-5"} src={"/assets/svg/google.svg"} width={"32"} height={"32"} />
        Continue With Google
      </button>
    </div>
  );
}
