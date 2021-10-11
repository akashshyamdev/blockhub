import Heading from "@components/Heading/Heading";
import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import snarkdown from "snarkdown";

export interface PostDetailsProps {
  post: IPost;
}

export default function PostDetails({ post }: PostDetailsProps) {
  console.log(post);

  return (
    <main className={"flex flex-row justify-center items-center py-10"}>
      <div className="w-5/12">
        <Heading className={"mb-3 leading-normal font-medium"} shade={"800"} variant={"h1"}>
          {post.title}
        </Heading>

        <Heading family={"sans"} className={"mb-8"} variant={"h3"}>
          {post.subTitle}
        </Heading>

        <div dangerouslySetInnerHTML={{ __html: snarkdown(post.content) }} />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const post: IResponseSuccess<IPost> = await axios.get(
    `${process.env.SERVER_URL}/api/posts/${slug}`
  );

  return {
    props: {
      post: post.data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IResponseSuccess<IPost[]> = await axios.get(`${process.env.SERVER_URL}/api/posts`);

  const paths = posts.data.data.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};
