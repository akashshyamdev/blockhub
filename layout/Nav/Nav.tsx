import { BellIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const [session] = useSession();

  const logout = () => signOut();

  return (
    <header className={""}>
      <nav>
        <ul className={"flex flex-row"}>
          <li>
            <Link href={"/notifications"}>
              <a>
                <BellIcon className={"w-10 cursor-pointer h-10"} />
              </a>
            </Link>
          </li>

          <li>
            {!session ? (
              <Link href={"/auth/signup"}>Sign up</Link>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
