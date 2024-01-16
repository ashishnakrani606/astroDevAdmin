import React, { useState } from "react";
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditer({className ,placeholder }) {
  const [editorState, setEditorState] = useState("");
  const onEditorStateChange = (e) => {
    setEditorState(e);
  };
  return (
    <div>
        <div className={`dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-lg bg-stone-100 ${className}`}>
      <Editor
        editorState={editorState}
        className="m-0"
        placeholder={placeholder}
        toolbarClassName="toolbarClassName !border-0 !rounded-lg !bg-primary-light dark:!bg-blacklight !mb-0 !bg-stone-100 dark:!bg-[#b9b9b9] dark:!text-black"
        wrapperClassName="wrapperClassName "
        editorClassName="editorarea border-t border-black/10 dark:border-white/10 min-h-[130px] bg-white dark:bg-[white] dark:text-black p-4 rounded-b-lg"      
        onEditorStateChange={(e) => onEditorStateChange(e)}
        toolbar={{
          inline: {
            options: ["bold"],
          },
          textAlign: {
            inDropdown: true,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          link: {
            options: ["link"],
          },
        }}
      />
      </div>
    </div>
  );
}

export default TextEditer;