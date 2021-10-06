import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

export default function Nav() {
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
            <Link href={"/auth/signup"}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
