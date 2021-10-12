import React from "react";
import { useDropzone } from "react-dropzone";

export interface DragAndDropProps {
  heading: string;
}

export default function DragAndDrop({ heading }: DragAndDropProps) {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });

  return (
    <div className="w-full px-10 py-14 border-2 border-dashed border-blue-600 relative rounded-2">
      <div {...getRootProps({ className: "" })}>
        <input
          {...getInputProps()}
          multiple={false}
          accept={"image/png"}
          placeholder={"a"}
          onChange={() => {}}
          className={"absolute bg-gray-500 h-full w-full top-0 right-0 left-0 bottom-0"}
        />

        <h5 className={"text-center text-2xl"}>{heading}</h5>
      </div>
    </div>
  );
}
