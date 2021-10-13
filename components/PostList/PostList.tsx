import { IPost } from "@customTypes/post";
import { formatPostDate } from "@lib/date";
import { calculateReadingTime } from "@lib/reading";
import classes from "@components/PostList/PostList.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface PostListProps {
  posts: IPost[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <>
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
    </>
  );
}
