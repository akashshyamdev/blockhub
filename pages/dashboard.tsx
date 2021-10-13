import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import { formatPostDate } from "@lib/date";
import { calculateReadingTime } from "@lib/reading";
import classes from "@styles/components/post.module.scss";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
        {posts?.map((post) => {
          const time = calculateReadingTime(post);

          return (
            <Link href={{ pathname: `/posts/[slug]`, query: { slug: post.slug } }} key={post._id}>
              <article className={classes.post}>
                <div>
                  <h3 className={classes.post__title}>{post.title}</h3>
                  <h5 className={classes.post__subtitle}>{post.subTitle}</h5>

                  <div className={classes.post__stats}>
                    <p>{formatPostDate(post.createdAt)}</p>
                    <div className={classes.post__separator}>&nbsp;</div>

                    <p>{time.readingTime} min(s)</p>
                    <div className={classes.post__separator}>&nbsp;</div>

                    <p>{time.wordCount} words</p>
                  </div>
                </div>

                <div className={classes.post__cover}>
                  <Image src={post.coverImage} layout="fill" className={classes.post__coverImage} />
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
