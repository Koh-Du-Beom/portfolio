"use client";

import { useState } from "react";

const email = "bean3260@naver.com";

export default function CopyEmailButton() {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("이메일 복사 완료");
    } catch {
      setMessage(`복사하지 못했어요. 직접 복사해 주세요: ${email}`);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-zinc-100 px-5 text-sm font-bold text-zinc-950 transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        이메일 주소 복사
      </button>
      <p role="status" className="mt-2 text-xs text-zinc-400">{message}</p>
    </div>
  );
}
