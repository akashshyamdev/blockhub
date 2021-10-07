import { signIn } from "next-auth/client";
import Image from "next/image";

export default function OAuth() {
  const googleAuth = () => signIn("google", { callbackUrl: "http://localhost:3000/" });

  const githubAuth = () => signIn("github", { callbackUrl: "http://localhost:3000/" });

  const facebookAuth = () => signIn("facebook", { callbackUrl: "http://localhost:3000/" });

  return (
    <div>
      <button
        className={"flex flex-row items-center px-7 py-5 border border-1 gap-x-3"}
        onClick={googleAuth}
      >
        <Image src={"/assets/svg/google.svg"} width={"32"} height={"32"} />
        Continue With Google
      </button>

      <button
        className={"flex flex-row items-center px-7 py-5 border border-1 gap-x-3"}
        onClick={githubAuth}
      >
        <Image src={"/assets/svg/github.svg"} width={"32"} height={"32"} />
        Continue With Github
      </button>

      <button
        className={"flex flex-row items-center px-7 py-5 border border-1 gap-x-3"}
        onClick={facebookAuth}
      >
        <Image src={"/assets/svg/facebook.svg"} width={"32"} height={"32"} />
        Continue With Facebook
      </button>
    </div>
  );
}
