import Heading from "@components/Heading/Heading";
import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import { calculateReadingTime } from "@lib/reading";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import snarkdown from "snarkdown";

export interface PostDetailsProps {
  post: IPost;
}

export default function PostDetails({ post }: PostDetailsProps) {
  const time = calculateReadingTime(post);

  return (
    <main className={"flex flex-row justify-center items-center py-10"}>
      <article className="w-5/12">
        <Heading className={"mb-0 leading-normal font-medium"} shade={"800"} variant={"h1"}>
          {post.title}
        </Heading>

        <Heading family={"sans"} className={"mb-5"} variant={"h3"}>
          {post.subTitle}
        </Heading>

        <div className={"flex flex-row gap-x-3 items-center mb-8"}>
          <div>
            <Image src={post.user.image} width={"44"} height={"44"} className={"rounded-full"} />
          </div>

          <div className={""}>
            <p>{post.user.name}</p>
            <p className={"text-gray-400"}>{time.readingTime} min read</p>
          </div>
        </div>

        <div className={"relative w-full"} style={{ height: "31.25rem" }}>
          <Image src={post.coverImage} layout={"fill"} />
        </div>

        <div
          className={"font-serif text-xl mt-14"}
          dangerouslySetInnerHTML={{ __html: snarkdown(post.content) }}
        />
      </article>
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
