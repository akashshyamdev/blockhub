import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data } = useSession();

  console.log();
  return (
    <main>
      <h1>Content</h1>

      <Link href={"/posts/create"}>
        <a>Create Post</a>
      </Link>

      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
