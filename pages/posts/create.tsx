import { I18n } from "@aws-amplify/core";
import Button from "@components/Button/Button";
import classes from "@styles/components/preview.module.scss";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import snarkdown from "snarkdown";

function CreatePost() {
  const router = useRouter();
  const { data } = useSession();

  // Form
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const [markdown, setMarkdown] = useState("");
  const [result, setResult] = useState("");

  const createPost = async () => {
    await axios.post(`/api/posts/`, {
      title,
      subTitle,
      content: markdown,
      email: data?.user?.email,
    });

    router.push("/");
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = e.target.value;

    setMarkdown(newMarkdown);
    setResult(snarkdown(newMarkdown));
  };

  return (
    <main className={"flex flex-row flex-grow full justify-center py-10"}>
      <div className={"flex flex-col h-full w-8/12 items-center"}>
        <div className={"w-full mb-10"}>
          <div className={"mb-3 cursor-pointer"}>
            <label htmlFor="fileInput" className={"border cursor-pointer p-5 rounded"}>
              Add a cover image
              <input type="file" id={"fileInput"} accept={"image/*"} className={"hidden"} />
            </label>
          </div>

          <input
            type="text"
            className={"w-full text-5xl rounded mt-5 px-10 py-6 bg-gray-100"}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={I18n.get("createPostTitlePlaceholder")}
          />

          <input
            type="text"
            className={"w-full text-xl mt-3 rounded px-10 py-6 bg-gray-100"}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder={I18n.get("createPostSubTitlePlaceholder")}
          />
        </div>

        <div className={"grid w-full h-full grid-cols-2 mt-10"}>
          <div>
            <textarea
              className={`w-full p-7 h-full overflow-scroll resize-none bg-gray-100 rounded rounded-r-none outline-none`}
              name="editor"
              value={markdown}
              onChange={onChange}
              id="editor"
              placeholder={I18n.get("createPostContentPlaceholder")}
            />
          </div>

          <div
            className={`bg-red-50 ${classes.preview} rounded-l-none rounded`}
            id="result"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        </div>

        <div className={"mt-8 flex w-full flex-row justify-start"}>
          <Button onClick={createPost}>{I18n.get("createPost")}</Button>
        </div>
      </div>
    </main>
  );
}

export default CreatePost;
