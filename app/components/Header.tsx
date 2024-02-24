"use client";

import {
  assistantAtom,
  fileAtom,
  threadAtom,
  runStateAtom,
  assistantFileAtom,
  runAtom,
} from "@/atom";
import { useAtom } from "jotai";
import React from "react";

function Header() {
  const [assistant] = useAtom(assistantAtom);
  const [file] = useAtom(fileAtom);
  const [assistantFile] = useAtom(assistantFileAtom);
  const [thread] = useAtom(threadAtom);
  const [run] = useAtom(runAtom);
  const [runState] = useAtom(runStateAtom);

  return (
    <div className="chat-header-wrapper">
      <div className="chat-header-item">
        <span>Assistant:</span>
        <span className="chat-header-item-status">{assistant?.id}</span>
      </div>
      <div className="chat-header-item">
        <span>File:</span>
        <span className="chat-header-item-status">{file}</span>
      </div>
      <div className="chat-header-item">
        <span>Assistant File:</span>
        <span className="chat-header-item-status">{assistantFile}</span>
      </div>
      <div className="chat-header-item">
        <span>Thread:</span>
        <span className="chat-header-item-status">{thread?.id}</span>
      </div>
      <div className="chat-header-item">
        <span>Run:</span>
        <span className="chat-header-item-status">{run?.id}</span>
      </div>
      <div className="chat-header-item">
        <span>Run State:</span>
        <span className="chat-header-item-status">{runState}</span>
      </div>
    </div>
  );
}

export default Header;
