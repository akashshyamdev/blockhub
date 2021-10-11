import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import axios from "axios";
import { GetStaticProps } from "next";

export interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {
  console.log(posts);

  return (
    <main className={"flex flex-row justify-center items-center"}>
      <div className={"w-8/12"}>
        {posts?.map((post) => (
          <div className={""}>
            <h3>{post.title}</h3>
            <h5>{post.subTitle}</h5>
          </div>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("A");
  const posts: IResponseSuccess<IPost> = await axios.get("http://localhost:3000/api/posts");

  console.log(posts);

  return { props: { posts: posts.data.data }, revalidate: 10 };
};
