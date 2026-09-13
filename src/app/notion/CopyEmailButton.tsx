"use client";

import { useEffect, useRef, useState } from "react";

const email = "bean3260@naver.com";

export default function CopyEmailButton() {
  const [message, setMessage] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function copyEmail() {
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage("이메일 복사 완료");
    } catch {
      setMessage(`복사하지 못했어요. 직접 복사해 주세요: ${email}`);
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setMessage(""), 2000);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-zinc-100 px-5 text-sm font-bold text-zinc-950 transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        이메일 주소 복사
      </button>
      <p
        role="status"
        className="absolute bottom-full left-0 z-10 mb-2 w-max max-w-64 rounded-lg bg-zinc-800 px-3 py-2 text-xs text-zinc-100 shadow-lg empty:hidden"
      >
        {message}
      </p>
    </div>
  );
}
