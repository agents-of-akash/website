import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)] h-full">
      <main className="flex flex-col gap-12 row-start-2 items-center">
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/aoa-logo.png"
            alt="Agents of Akash logo"
            width={300}
            height={38}
            priority
          />
          <h1 className="text-center font-medium text-6xl px-3 py-2 -rotate-3 font-[family-name:var(--font-jersey-15-charted)] border-red-600 text-[#F96764] uppercase"><span className="opacity-0">h</span>{" "}Agents of Akash{" "}<span className="opacity-0">h</span></h1>
        </div>
        {/* TODO: Add Discord invite link later */}
        <a
          className="flex items-center gap-2 bg-[#5865F2] px-4 py-2 rounded-lg hover:opacity-95 font-sans text-base font-semibold"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/discord.svg"
            alt="Discord icon"
            width={24}
            height={24}
          />
          Continue with Discord
        </a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p
          className="flex items-center gap-2 opacity-50"
        >
          Agents of Akash - Copyright © 2025
        </p>
      </footer>
    </div>
  );
}
