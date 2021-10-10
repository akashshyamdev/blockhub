import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
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
