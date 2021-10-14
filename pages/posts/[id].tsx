import Heading from "@components/Heading/Heading";
import { IResponseSuccess } from "@customTypes/http";
import { IPost } from "@customTypes/post";
import { HeartIcon } from "@heroicons/react/outline";
import { calculateReadingTime } from "@lib/reading";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import snarkdown from "snarkdown";

export interface PostDetailsProps {
  post: IPost;
}

export default function PostDetails({ post }: PostDetailsProps) {
  const { data } = useSession();

  const time = calculateReadingTime(post);

  const addLike = async () => {
    await axios.post(`/api/posts/${post.slug}/likes`, { email: data.user.email });
  };

  return (
    <main className={"flex flex-row justify-center py-10"}>
      <aside className={"w-1/12 flex flex-row justify-center pt-4"}>
        <HeartIcon
          onClick={addLike}
          className={"fixed w-7 hero-icon h-7 cursor-pointer text-gray-500"}
        />
      </aside>

      <article className="w-6/12 pt-2">
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
      <aside className="w-1/12" />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const post: IResponseSuccess<IPost> = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/${id}`
  );

  return {
    props: {
      post: post.data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IResponseSuccess<IPost[]> = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
  );

  const paths = posts.data.data.map((post) => ({ params: { id: post.id } }));

  return {
    paths: paths,
    fallback: false,
  };
};
