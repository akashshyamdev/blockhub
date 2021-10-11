import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import { formatPostDate } from "@lib/date";
import { calculateReadingTime } from "@lib/reading";
import classes from "@styles/components/post.module.scss";
import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";

export interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main className={"flex flex-row justify-center items-center py-10"}>
      <div className={"w-8/12"}>
        {posts?.map((post) => {
          const time = calculateReadingTime(post);

          return (
            <Link href={{ pathname: `/posts/[slug]`, query: { slug: post.slug } }} key={post._id}>
              <a className={classes.post}>
                <h3 className={classes.post__title}>{post.title}</h3>
                <h5 className={classes.post__subtitle}>{post.subTitle}</h5>

                <div className={classes.post__stats}>
                  <p>{formatPostDate(post.createdAt)}</p>
                  <div className={classes.post__separator}>&nbsp;</div>

                  <p>{time.readingTime} min(s)</p>
                  <div className={classes.post__separator}>&nbsp;</div>

                  <p>{time.wordCount} words</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: IResponseSuccess<IPost> = await axios.get("http://localhost:3000/api/posts");

  return { props: { posts: posts.data.data }, revalidate: 10 };
};
