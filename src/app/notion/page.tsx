import Link from "next/link";
import { SiNotion } from "react-icons/si";
import { createPageMetadata } from "@/lib/site";
import CopyEmailButton from "./CopyEmailButton";

export const metadata = createPageMetadata(
  "고두범의 노션",
  "취업 준비와 커리어에 대한 개인 기록 공간입니다. 궁금한 점은 편하게 연락해 주세요.",
  "/notion",
);

export default function NotionPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col px-6 py-8 md:px-10 md:py-12">
      <Link
        href="/about"
        className="w-fit rounded text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        <span aria-hidden="true">← </span>포트폴리오로
      </Link>

      <section className="my-auto py-16">
        <SiNotion size={36} aria-hidden="true" className="text-zinc-400" />
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">고두범의 노션</h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-300">
          취업을 준비하며 쌓아가는 기록입니다.
        </p>
        <p className="mt-3 leading-7 text-zinc-400">
          이력서를 다듬고, 면접을 준비하고, 다음 커리어를 고민하는 개인 공간이에요.
          기록이나 제가 하는 일이 궁금하시다면 개인적으로 편하게 연락해 주세요.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <CopyEmailButton />
          <a
            href="https://www.instagram.com/dubeom/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram으로 연락하기 (새 탭)"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-700 px-5 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Instagram으로 연락하기 <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-6">
          <a
            href="https://app.notion.com/p/3d6f1fd16631804e9abffa87f6898f3b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="개인 노션 열기 (새 탭, 접근 권한 필요)"
            className="inline-flex min-h-11 items-center gap-2 rounded text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            개인 노션 열기 <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-1 text-xs leading-5 text-zinc-500">개인 기록은 접근 권한이 있는 노션 계정으로 볼 수 있습니다.</p>
        </div>
      </section>
    </main>
  );
}
