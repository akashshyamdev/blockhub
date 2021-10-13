import { I18n } from "@aws-amplify/core";
import Button from "@components/Button/Button";
import { IPost } from "@customTypes/post";
import { uploadCoverImage } from "@lib/s3";
import classes from "@styles/components/preview.module.scss";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import snarkdown from "snarkdown";

function CreatePost() {
  const router = useRouter();
  const { data } = useSession();

  // Form
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [markdown, setMarkdown] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const draft: IPost & { file: File } = JSON.parse(localStorage.getItem("draft"));

    if (draft) {
      setTitle(draft.title);
      setSubTitle(draft.subTitle);
      setMarkdown(draft.content);
      setFile(draft.file);
    }
  }, []);

  const createPost = async () => {
    const res = await uploadCoverImage(file);

    await axios.post(`/api/posts/`, {
      title,
      subTitle,
      content: markdown,
      email: data?.user?.email,
      image: res.Location,
    });

    localStorage.removeItem("draft");

    toast.success("Published Post!");

    router.push("/");
  };

  const savePost = async () => {
    localStorage.setItem("draft", JSON.stringify({ title, subTitle, content: markdown }));

    toast.success("Saved Draft(except cover image)", {
      onClose: () => console.log("A"),
    });
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = e.target.value;

    setMarkdown(newMarkdown);
    setResult(snarkdown(newMarkdown));
  };

  const updateFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <main className={"flex flex-row flex-grow full justify-center py-10"}>
      <div className={"flex flex-col h-full w-8/12 items-center"}>
        {/* Heading */}
        <div className={"w-full mb-10"}>
          <div className={"mb-3 cursor-pointer"}>
            <label htmlFor="fileInput" className={"border cursor-pointer p-5 rounded"}>
              {file ? "Add" : "Update"} cover image
              <input
                type="file"
                id={"fileInput"}
                accept={"image/*"}
                className={"hidden"}
                onChange={updateFile}
              />
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

        {/* Markdown */}
        <div className={"grid w-full h-full grid-cols-2 mt-3"}>
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

        {/* Buttons */}
        <div className={"mt-8 flex w-full flex-row justify-start"}>
          <Button onClick={createPost}>{I18n.get("createPost")}</Button>

          <Button onClick={savePost} customClass={"ml-4"}>
            {I18n.get("savePost")}
          </Button>
        </div>
      </div>
    </main>
  );
}

export default CreatePost;
