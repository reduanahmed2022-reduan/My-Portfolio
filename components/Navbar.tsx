"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080811]/85 backdrop-blur-xl">
      <nav className="container-shell flex h-[76px] items-center justify-between">
        <Link href="/#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-500 text-sm font-black text-white shadow-lg shadow-violet-500/20">RA</span>
          <span className="text-lg font-bold tracking-tight text-white">Reduan<span className="text-violet-400">.</span></span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <Link key={label} href={`/${href}`} className="text-sm text-slate-300 transition hover:text-white">{label}</Link>)}
          <Link href="/#contact" className="rounded-full border border-violet-400/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500/15">Let&apos;s talk <span aria-hidden>↗</span></Link>
        </div>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-xl text-white md:hidden">{open ? "×" : "☰"}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#0b0b17] px-6 py-4 md:hidden">{links.map(([label, href]) => <Link key={label} href={`/${href}`} onClick={() => setOpen(false)} className="block py-3 text-sm text-slate-300">{label}</Link>)}</div>}
    </header>
  );
}
