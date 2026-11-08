"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import Image from "next/image";

const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST API", "Better Auth"] },
  { group: "Tools & workflow", items: ["Git", "GitHub", "VS Code", "Vercel", "Postman"] },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="relative flex min-h-[780px] items-center overflow-hidden pt-28">
          <div className="glow-orb left-[5%] top-24 h-72 w-72 bg-violet-600" />
          <div className="glow-orb right-[5%] top-40 h-80 w-80 bg-sky-500" />
          <div className="container-shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to learning & opportunities</div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[.24em] text-slate-400">Hello, I&apos;m</p>
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl">Reduan <span className="gradient-text">Ahmed</span></h1>
              <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">Junior Full-Stack Web Developer</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">I build clean, responsive web experiences and enjoy turning ideas into useful digital products. I&apos;m continuously improving my skills in JavaScript, React, Next.js and backend development.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-900/30 transition hover:brightness-110">Explore my work <span aria-hidden>↗</span></a>
                <a
                  href="/Reduan_Ahmed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-white/5"
                >
                  View / Download CV ↓
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-400">
                <a className="transition hover:text-white" href="https://github.com/reduanahmed2022-reduan" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a
                  className="transition hover:text-white"
                  href="https://www.linkedin.com/in/reduan-ahmed-695824443/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn profile ↗
                </a>

              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-violet-600/30 to-sky-500/20 blur-2xl" />
              <div className="panel relative overflow-hidden rounded-[34px] p-4">
                <div className="flex items-center justify-between px-2 py-3 text-xs text-slate-500">
                  <span>PROFILE / 001</span>
                  <span className="text-violet-300">SYLHET, BD</span>
                </div>
                <div className="relative grid aspect-[4/4.5] place-items-center overflow-hidden rounded-[25px] bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,.34),transparent_55%),linear-gradient(145deg,#17152c,#0d1728)]">
                  <div className="absolute h-88 w-88 rounded-full border border-violet-300/20" />
                  <div className="absolute h-80 w-80 rounded-full border border-sky-300/15" />

                  <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl shadow-violet-900/50 bg-[#121022]">
                    <Image
                      src="/images/reduan2.png"
                      alt="Reduan Ahmed - Junior Web Developer"
                      fill
                      priority
                      sizes="320px"
                      className="object-cover object-top rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-space border-t border-white/5">
          <div className="container-shell">
            <SectionHeading eyebrow="A little about me" title="Curious mind. Practical builder." description="A developer in progress, focused on learning by building real projects." />
            <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
              <div className="panel rounded-3xl p-7 sm:p-9">
                <p className="leading-8 text-slate-300">I&apos;m Reduan Ahmed, a Computer Science diploma graduate from Sylhet, Bangladesh. My programming journey started with curiosity about how websites work and grew into a passion for building interactive web applications. I enjoy working across both frontend and backend—creating clear interfaces, connecting APIs and working with databases.</p>
                <p className="mt-5 leading-8 text-slate-400">I like solving practical problems, learning new concepts and improving a project step by step. Outside programming, I enjoy exploring nature, travelling and capturing moments through photography. I believe consistency, curiosity and patience are essential to becoming a better developer.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="panel rounded-2xl p-6"><p className="text-sm text-slate-500">Based in</p><p className="mt-2 text-xl font-bold text-white">Sylhet, Bangladesh</p></div>
                <div className="panel rounded-2xl p-6"><p className="text-sm text-slate-500">What I enjoy</p><p className="mt-2 text-xl font-bold text-white">Building useful web apps</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-space border-t border-white/5 bg-[#0b0b16]">
          <div className="container-shell">
            <SectionHeading eyebrow="What I work with" title="Skills & technologies" description="Tools and technologies I have been learning and using in my projects. Skill levels are intentionally not scored so the section stays honest and easy to update." />
            <div className="grid gap-5 md:grid-cols-3">
              {skills.map((group) => <div key={group.group} className="panel rounded-3xl p-7"><div className="mb-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-lg text-violet-300">{group.group === "Frontend" ? "◈" : group.group === "Backend" ? "⌘" : "⚙"}</span><h3 className="text-lg font-bold text-white">{group.group}</h3></div><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="pill rounded-full px-3 py-2 text-xs font-medium">{item}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="education" className="section-space border-t border-white/5">
          <div className="container-shell">
            <SectionHeading eyebrow="Academic background" title="Education" />
            <div className="panel max-w-3xl rounded-3xl p-7 sm:p-9">
              <div className="flex flex-col justify-between gap-3 sm:flex-row"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">Diploma</p><h3 className="mt-3 text-xl font-bold text-white">Diploma in Computer Science</h3><p className="mt-2 text-slate-400">Sylhet Polytechnic Institute</p></div><span className="h-fit w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Completed · 2024</span></div>
              <div className="mt-7 flex flex-wrap gap-3"><span className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-300">CGPA <strong className="ml-2 text-white">3.10</strong></span><span className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-300">Field <strong className="ml-2 text-white">Computer Science</strong></span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/5 bg-[#0b0b16] py-14">
          <div className="container-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-violet-300">Experience</p><h2 className="mt-2 text-2xl font-bold text-white">Growing through hands-on projects</h2><p className="mt-2 text-sm text-slate-400">Currently building practical experience through personal and academic projects.</p></div><span className="pill w-fit rounded-full px-4 py-2 text-xs">Project-based learning</span></div>
        </section>

        <section id="projects" className="section-space">
          <div className="container-shell">
            <SectionHeading eyebrow="Selected work" title="Projects I have built" description="A selection of learning and portfolio projects. Open a project to see its technology stack, challenges and future plans." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => <article key={project.slug} className="project-card panel overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111126]"><img src={project.image} alt={`${project.name} project preview`} className="h-full w-full object-cover transition duration-500 hover:scale-105" /><span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-bold tracking-widest text-violet-200 backdrop-blur">0{index + 1} / PROJECT</span></div>
                <div className="p-6"><p className="text-xs font-semibold uppercase tracking-wider text-violet-300">{project.category}</p><h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-slate-300">{tag}</span>)}</div><Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-violet-300">View project details <span>↗</span></Link></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="resume" className="border-y border-violet-400/10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(91,33,182,.2),transparent_65%)] py-16">
          <div className="container-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[.25em] text-violet-300">Resume</p><h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Want to know more about my background?</h2><p className="mt-3 text-sm text-slate-400">Download my resume to explore my technical skills, full-stack projects, and detailed experience.</p></div>
            <a
              href="/Reduan_Ahmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#11111c] transition hover:bg-violet-100"
            >
              Download Resume ↓ <span aria-hidden>↗</span>
            </a>
          </div>
        </section>

        <section id="contact" className="section-space">
          <div className="container-shell">
            <SectionHeading eyebrow="Get in touch" title="Let's build something meaningful." description="Have a project idea, opportunity or just want to connect? Feel free to reach out." />
            <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div className="panel rounded-3xl p-7">
                <div className="space-y-6">
                  <div><p className="text-xs uppercase tracking-widest text-slate-500">Email</p><a className="mt-2 block break-all text-base font-semibold text-white hover:text-violet-300" href="mailto:reduanahmed2022@gmail.com">reduanahmed2022@gmail.com</a></div>
                  <div><p className="text-xs uppercase tracking-widest text-slate-500">Phone</p><a className="mt-2 block text-base font-semibold text-white hover:text-violet-300" href="tel:+8801838531892">+880 1838-531892</a></div>
                  <div><p className="text-xs uppercase tracking-widest text-slate-500">Location</p><p className="mt-2 text-base font-semibold text-white">Sylhet, Bangladesh</p></div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6"><a href="https://github.com/reduanahmed2022-reduan" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-violet-400 hover:text-white">GitHub ↗</a><a href="mailto:reduanahmed2022@gmail.com" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-violet-400 hover:text-white">Email ↗</a><a href="#home" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-violet-400 hover:text-white">Back to top ↑</a></div>
              </div>
              <div className="panel rounded-3xl p-7 sm:p-9"><p className="text-lg font-bold text-white">A quick note</p><p className="mt-3 leading-7 text-slate-400">For project discussions, collaborations or opportunities, send me an email. I&apos;ll be happy to connect and learn more about what you&apos;re working on.</p><a href="mailto:reduanahmed2022@gmail.com?subject=Hello%20Reduan" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-900/30">Send an email <span className="ml-2">↗</span></a></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8"><div className="container-shell flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><p className="text-sm text-slate-500">© {new Date().getFullYear()} Reduan Ahmed. Built with Next.js & Tailwind CSS.</p><a href="#home" className="text-sm text-slate-400 hover:text-white">Back to top ↑</a></div></footer>
    </>
  );
}
