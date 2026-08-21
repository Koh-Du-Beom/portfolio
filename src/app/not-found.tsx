import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col px-6 py-8 md:px-10 md:py-10">
        <Link
          href="/"
          className="flex w-fit items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"
          aria-label="포트폴리오 홈으로 이동"
        >
          <Image src="/brand-mark.svg" alt="" width={28} height={28} />
          <span className="text-[10px] font-medium tracking-[0.18em] text-zinc-400">
            DUBEOM KOH
          </span>
        </Link>

        <section className="my-auto flex flex-col items-center pb-36 text-center sm:pb-24">
          <p className="font-mono text-[10px] tracking-[0.28em] text-zinc-500">
            FACE NOT FOUND
          </p>
          <h1 className="mt-4 font-mono text-[clamp(5rem,18vw,10rem)] font-light leading-none tracking-[-0.09em] text-zinc-100">
            404
          </h1>
          <div className="mt-5 h-px w-8 bg-zinc-700" />
          <p className="mt-5 text-sm text-zinc-400">
            찾으시는 페이지가 없습니다.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-400 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"
          >
            처음으로
            <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <p className="font-mono text-[9px] tracking-[0.16em] text-zinc-700">
          ERROR / UNKNOWN FACE
        </p>
      </div>

      <div className="pointer-events-none absolute right-4 bottom-0 z-0 w-[20rem] opacity-70 mix-blend-lighten [mask-image:linear-gradient(to_right,transparent_0%,black_12%)] sm:right-8 sm:w-[28rem]">
        <Image
          src="/logo-candidates/D3-crying-tiger.png"
          alt=""
          width={1254}
          height={1254}
          className="h-auto w-full"
        />
      </div>
    </main>
  );
}
