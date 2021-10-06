import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"/notifications"}>
              <BellIcon className={"w-10 cursor-pointer h-10"} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
