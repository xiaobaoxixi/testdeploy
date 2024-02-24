"use client";

import { useEffect, useState } from "react";
import Assistant from "./components/Assistant";
import AssistantFile from "./components/AssistantFile";
import Header from "./components/Header";
import Blog from "./components/Blog";
import { useAtom } from "jotai";
import {
  assistantAtom,
  fileAtom,
  runStateAtom,
  threadAtom,
  isValidRunState,
  assistantFileAtom,
  runAtom,
} from "@/atom";
import Thread from "./components/Thread";
import Run from "./components/Run";
import ChatContainer from "./components/ChatContainer";

export default function Home() {
  const [mode, setMode] = useState('chat with you'); 
  // Atom State
  const [, setAssistant] = useAtom(assistantAtom);
  const [, setFile] = useAtom(fileAtom);
  const [, setAssistantFile] = useAtom(assistantFileAtom);
  const [, setThread] = useAtom(threadAtom);
  const [, setRun] = useAtom(runAtom);
  const [, setRunState] = useAtom(runStateAtom);

  // Load default data
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localAssistant = localStorage.getItem("assistant");
      if (localAssistant) {
        setAssistant(JSON.parse(localAssistant));
      }
      const localFile = localStorage.getItem("file");
      if (localFile) {
        setFile(localFile);
      }
      const localAssistantFile = localStorage.getItem("assistantFile");
      if (localAssistantFile) {
        setAssistantFile(localAssistantFile);
      }
      const localThread = localStorage.getItem("thread");
      if (localThread) {
        setThread(JSON.parse(localThread));
      }
      const localRun = localStorage.getItem("run");
      if (localRun) {
        setRun(JSON.parse(localRun));
      }
      const localRunState = localStorage.getItem("runState");
      if (localRunState && isValidRunState(localRunState)) {
        setRunState(localRunState);
      }
    }
  }, []);

  return (
    <main className="flex flex-col">
      <button className="mode-toggle" onClick={() => setMode(mode === 'choose and read' ? 'chat with you' : 'choose and read')}>
        I'd rather {mode}
      </button>
      {mode !== 'choose and read' ? (
        <Blog />
        ) : (
       <div>
          <Header />
          <div className="flex flex-col mt-20 gap-x-10">
            <div className="flex flex-col w-full">
              <Assistant />
              <AssistantFile />
              <Thread />
              <Run />
            </div>
            <div className="w-full">
              <ChatContainer />
            </div>
          </div>
        </div>
      )}
      <p></p>
    </main>
  );
}
