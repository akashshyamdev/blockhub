import { Menu,MenuButton,MenuItem,MenuList } from "@chakra-ui/react";
import Button from "@components/Button/Button";
import Modal from "@components/Modal/Modal";
import OAuth from "@components/OAuth/OAuth";
import { BellIcon,BookmarkIcon,SearchIcon } from "@heroicons/react/outline";
import { signOut,useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React,{ useState } from "react";

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

        <li>
          <Menu autoSelect={false}>
            <MenuButton>
              <Image src={data.user.image} width={"36"} height={"36"} className={"rounded-full"} />
            </MenuButton>

            <MenuList>
              <MenuItem>
                <Link href={"/posts/create"}>
                  <a>Create Post</a>
                </Link>
              </MenuItem>

              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </li>
      </>
    );
  };

  const renderLoggedOutItems = () => {
    return <Button onClick={openModal}>Signup</Button>;
  };

  return (
    <>
      <header
        className={"bg-white flex flex-row justify-center items-center h-20 filter drop-shadow-md"}
      >
        <div className={"flex flex-row w-8/12 justify-between items-center"}>
          <Link href={"/"}>
            <a className={"font-serif text-2xl"}>Blockhub</a>
          </Link>

          <nav className={"flex flex-row items-center gap-x-8"}>
            <ul className={"flex flex-row items-center text-gray-600 gap-x-5"}>
              {!data ? renderLoggedOutItems() : renderLoggedInItems()}
            </ul>
          </nav>
        </div>
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
