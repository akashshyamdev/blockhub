import { IPost } from "@customTypes/post";

export function calculateReadingTime(post: IPost) {
  const WORDS_PER_MINUTE = 200;

  let result: { wordCount?: number; readingTime?: number } = {};

  const regex = /\w+/g;

  result.wordCount = (post.content || "").match(regex).length;
  result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE);

  return result;
}
