import { signIn, signOut, useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";

export default function Signup() {
  const [session, loading] = useSession();

  return (
    <main>
      <Head>
        <title>Signup | Blockhub</title>
      </Head>

      <div>
        {loading && <p>Loading..</p>}

        {!session && (
          <>
            <button onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })}>
              Sign in
            </button>
          </>
        )}

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
