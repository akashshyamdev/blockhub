import { signIn } from "next-auth/client";
import Image from "next/image";
import classes from "./OAuth.module.scss";

export interface OAuthProps {
  containerClass?: string;
}

export default function OAuth({ containerClass }: OAuthProps) {
  const googleAuth = () => signIn("google", { callbackUrl: "http://localhost:3000/" });

  const facebookAuth = () => signIn("facebook", { callbackUrl: "http://localhost:3000/" });

  const twitterAuth = () => signIn("twitter", { callbackUrl: "http://localhost:3000/" });

  return (
    <div className={`${containerClass} ${classes.oauth}`}>
      <button className={classes.oauth__button} onClick={googleAuth}>
        <Image src={"/assets/svg/google.svg"} width={"28"} height={"28"} />
        Continue With Google
      </button>

      <button className={classes.oauth__button} onClick={facebookAuth}>
        <Image src={"/assets/svg/facebook.svg"} width={"28"} height={"28"} />
        Continue With Facebook
      </button>

      <button className={classes.oauth__button} onClick={twitterAuth}>
        <Image src={"/assets/svg/twitter.svg"} width={"28"} height={"28"} />
        Continue With Twitter
      </button>
    </div>
  );
}
