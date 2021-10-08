import Button from "@components/Button/Button";
import { BellIcon, BookmarkIcon, SearchIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const [session] = useSession();

  console.log(session);

  const logout = () => signOut();

  const renderLoggedInItems = () => {
    return (
      <>
        <li>
          <SearchIcon className={"w-6 hero-icon h-6"} />
        </li>

        <li>
          <Link href={"/bookmarks"}>
            <a>
              <BookmarkIcon className={"w-6 hero-icon h-6"} />
            </a>
          </Link>
        </li>

        <li>
          <Link href={"/notifications"}>
            <a>
              <BellIcon className={"w-6 hero-icon h-6"} />
            </a>
          </Link>
        </li>
      </>
    );
  };

  return (
    <header
      className={
        "bg-white flex flex-row justify-between items-center px-20 py-7 filter drop-shadow-md"
      }
    >
      <Link href={"/"}>
        <a className={"font-serif text-2xl"}>Blockhub</a>
      </Link>

      <nav className={"flex flex-row items-center gap-x-8"}>
        {/* Nav Icons */}
        <ul className={"flex flex-row items-center text-gray-600 gap-x-5"}>
          {renderLoggedInItems()}
        </ul>

        {/* CTAs */}
        <ul className={"flex flex-row items-center ml-8"}>
          <li>
            {!session ? (
              <Button href={"/auth/signup"}>Signup</Button>
            ) : (
              <Button onClick={logout}>Logout</Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
