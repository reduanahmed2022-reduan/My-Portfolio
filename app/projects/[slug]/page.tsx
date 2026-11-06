import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24 pt-32">
        <div className="container-shell">
          <Link href="/#projects" className="text-sm text-violet-300 hover:text-white">← Back to all projects</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[.25em] text-violet-300">{project.category}</p><h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{project.name}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{project.description}</p><div className="mt-8 flex flex-wrap gap-3"><a href={project.liveUrl || "#project-links"} target={project.liveUrl ? "_blank" : undefined} rel={project.liveUrl ? "noreferrer" : undefined} className="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-bold text-white">{project.liveUrl ? "Visit live website ↗" : "Live link coming soon"}</a><a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5">GitHub repository ↗</a></div></div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111126]"><img src={project.image} alt={`${project.name} preview`} className="w-full" /></div>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-xl font-bold text-white">Technology stack</h2><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">{item}</span>)}</div></section>
            <section id="project-links" className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-xl font-bold text-white">Project links</h2><p className="mt-4 text-sm leading-7 text-slate-400">The live website and repository links are provided where available. Replace any placeholder with the final project URL before submission.</p><p className="mt-3 break-all text-sm text-slate-300">Live: {project.liveUrl || "Not published yet"}</p><p className="mt-2 break-all text-sm text-slate-300">GitHub: {project.githubUrl}</p></section>
            <section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-xl font-bold text-white">Challenges faced</h2><ul className="mt-5 space-y-3">{project.challenges.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />{item}</li>)}</ul></section>
            <section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-xl font-bold text-white">Future improvements</h2><ul className="mt-5 space-y-3">{project.improvements.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />{item}</li>)}</ul></section>
          </div>
        </div>
      </main>
      <footer className="border-t border-white/10 py-8"><div className="container-shell text-center text-sm text-slate-500">© {new Date().getFullYear()} Reduan Ahmed</div></footer>
    </>
  );
}
