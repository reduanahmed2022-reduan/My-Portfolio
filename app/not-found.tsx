import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#080811] px-6 text-center"><div><p className="text-sm font-bold tracking-[.3em] text-violet-300">404 / NOT FOUND</p><h1 className="mt-4 text-5xl font-black text-white">Page not found</h1><p className="mt-4 text-slate-400">The page you are looking for does not exist.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white">Back to home</Link></div></main>;
}
