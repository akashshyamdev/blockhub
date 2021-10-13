import PostList from "@components/PostList/PostList";
import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const { data } = useSession();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    (async () => {
      const posts: IResponseSuccess<IPost[]> = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?email=${data.user.email}`
      );

      setPosts(posts.data.data);
    })();
  }, []);

  return (
    <main className={"flex flex-row justify-center items-center py-10"}>
      <div className={"w-8/12"}>
        <PostList posts={posts} />
      </div>
    </main>
  );
}
