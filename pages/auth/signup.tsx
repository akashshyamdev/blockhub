import Heading from "@components/Heading/Heading";
import OAuth from "@components/OAuth/OAuth";
import { useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Signup() {
  const router = useRouter();
  const [session] = useSession();

  useEffect(() => {
    if (session) router.push("/");
  }, [session]);

  return (
    <main className={"bg-gray-50 h-full flex flex-row justify-center items-center py-32"}>
      <Head>
        <title>Signup | Blockhub</title>
      </Head>

      <div className={"flex flex-col justify-center items-center bg-white w-5/12 px-14 py-8"}>
        <Heading align={"center"} variant={"h1"}>
          Welcome to Blockhub
        </Heading>

        <Heading align={"center"} variant={"h3"} className={"mt-5"}>
          The place where blockchain enthusiasts come together, share their knowledge and meet
          like-minded people
        </Heading>

        <OAuth containerClass={"py-16"} />
      </div>
    </main>
  );
}
