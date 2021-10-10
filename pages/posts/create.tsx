import classes from "@styles/components/preview.module.scss";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import snarkdown from "snarkdown";

function CreatePost() {
  const { data } = useSession();

  const [markdown, setMarkdown] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {}, []);

  const createPost = async () => {
    const post = await axios.post(`/api/posts/`, { title: "Abc", subTitle: "sub title" });

    console.log(post);
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = e.target.value;

    setMarkdown(newMarkdown);

    setResult(snarkdown(newMarkdown));
  };

  return (
    <main className={"flex flex-row flex-grow full justify-center"}>
      <div className={"w-8/12 grid grid-cols-2 bg-gray-50"}>
        <div>
          <textarea
            className={`w-full p-7 h-full bg-gray-50 outline-none`}
            name="editor"
            value={markdown}
            onChange={onChange}
            id="editor"
          />
        </div>

        <div
          className={`bg-red-50 ${classes.preview}`}
          id="result"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </div>
    </main>
  );
}

export default CreatePost;
