import OAuth from "@components/OAuth/OAuth";
import { signOut, useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";

export default function Signup() {
  const [session, loading] = useSession();

  return (
    <main className={"bg-gray-50 h-full"}>
      <Head>
        <title>Signup | Blockhub</title>
      </Head>

      <div>
        {!session && <OAuth />}

        {session && (
          <>
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </div>
    </main>
  );
}
