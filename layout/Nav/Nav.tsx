import Button from "@components/Button/Button";
import Modal from "@components/Modal/Modal";
import OAuth from "@components/OAuth/OAuth";
import { BellIcon, BookmarkIcon, SearchIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Nav() {
  const { data } = useSession();

  const [open, setOpen] = useState(false);

  const logout = () => signOut();

  const openModal = () => setOpen(true);

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
    <>
      <header
        className={
          "bg-white h-20 flex flex-row justify-between items-center px-20 py-4 filter drop-shadow-md"
        }
      >
        <Link href={"/"}>
          <a className={"font-serif text-2xl"}>Blockhub</a>
        </Link>

        <nav className={"flex flex-row items-center gap-x-8"}>
          <ul className={"flex flex-row items-center text-gray-600 gap-x-5"}>
            {renderLoggedInItems()}
            <li>
              {!data ? (
                <Button onClick={openModal}>Signup</Button>
              ) : (
                <div>
                  <Image
                    src={data.user.image}
                    width={"36"}
                    height={"36"}
                    className={"rounded-full"}
                  />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <Modal
        text={"Welcome to Blockhub"}
        subText={
          "The place where blockchain enthusiasts come together, share their knowledge and meet like-minded people"
        }
        open={open}
        setOpen={setOpen}
      >
        <OAuth containerClass={"py-16"} />
      </Modal>
    </>
  );
}
