import classes from "@styles/components/preview.module.scss";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useState } from "react";
import snarkdown from "snarkdown";

function CreatePost() {
  const { data } = useSession();

  // Form
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const [markdown, setMarkdown] = useState("");
  const [result, setResult] = useState("");

  const createPost = async () => {
    const post = await axios.post(`/api/posts/`, { title, subTitle, markdown });

    console.log(post);
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
          <input
            type="text"
            className={"w-full text-5xl rounded px-10 py-6 bg-gray-100"}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"The Title Goes Here..."}
          />

          <input
            type="text"
            className={"w-full text-xl mt-3 rounded px-10 py-6 bg-gray-100"}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder={"The Sub Title Goes Here..."}
          />
        </div>

        <div className={"grid w-full h-full grid-cols-2"}>
          <div>
            <textarea
              className={`w-full p-7 h-full bg-gray-100 rounded rounded-r-none outline-none`}
              name="editor"
              value={markdown}
              onChange={onChange}
              id="editor"
            />
          </div>

          <div
            className={`bg-red-50 ${classes.preview} rounded-l-none rounded`}
            id="result"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        </div>
      </div>
    </main>
  );
}

export default CreatePost;
