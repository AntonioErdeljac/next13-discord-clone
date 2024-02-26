"use client";

import { useTheme } from "next-themes";
import {
  BlockNoteEditor,
  PartialBlock,
} from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote
} from "@blocknote/react";
import "@blocknote/core/style.css";



interface EditorProps {
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({
 
  initialContent,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme();


  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: 
      initialContent 
      ? JSON.parse(initialContent) 
      : undefined,

  })

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Editor;
