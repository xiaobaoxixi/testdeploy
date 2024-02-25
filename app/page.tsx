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
  const [mode, setMode] = useState('list'); 
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
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className= {`main ${mode}`}>
      <div className="shape-container">
        <div className="up-wrapper">
          <div className="up">

          </div>
        </div>
        <div className="down-wrapper">
          <div className="down"></div>
          <div className="down-inside"></div>
          <div className="down2"></div>
          <div className="down2-inside"></div>
        </div>
      </div>
      <div className="logo-wrapper">
        <a className="logo" href="/"><h1>Musing Drops <span className="dot">.</span></h1></a>
        <p className="intro">From simple moments spring ideas, each a portal to my pondering. </p>
      </div>
      <button className= "mode-toggle" onClick={() => setMode(mode === 'list' ? 'chat' : 'list')}></button>
      {mode === 'list' ? (
        <Blog />
        ) : (
       <div className="chat-mode-wrapper">
          <Header />
          <div className="chat-function-wrapper">
            <Assistant />
            <AssistantFile />
            <Thread />
            <Run />
          </div>
          <div className="chat-container-outer-wrapper">
            <ChatContainer />
          </div>
        </div>
      )}
      <footer className="footer">
        <p>&copy; 2024 MusingDrops. All rights reserved for this beholder of a curious mind.</p>
      </footer>
    </main>
  );
}
