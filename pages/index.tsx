import PostList from "@components/PostList/PostList";
import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import axios from "axios";
import { GetStaticProps } from "next";

export interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main className={"flex flex-row justify-center items-center py-10"}>
      <div className={"w-8/12"}>
        <PostList posts={posts} />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: IResponseSuccess<IPost> = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
  );

  return { props: { posts: posts.data.data }, revalidate: 10 };
};
