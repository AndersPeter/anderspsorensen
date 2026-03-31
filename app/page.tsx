import Image from "next/image";
import profilePic from "./Anders-billede.png";

const roles = [
  {
    title: "Pædagogisk Konsulent",
    subtitle: "Neuropædagogik & Narrativ",
    description:
      "Specialiseret rådgivning og undervisning med fokus på neuropædagogik og narrative tilgange. Jeg hjælper institutioner og fagpersoner med at forstå og støtte forskelligartet læring.",
    tags: ["Neuropædagogik", "Narrativ", "Rådgivning"],
    href: "https://www.anderskonsulent.dk",
    linkLabel: "anderskonsulent.dk",
    accent: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    tagStyle: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    btnStyle:
      "bg-amber-500 hover:bg-amber-600 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Web & App Developer",
    subtitle: "React & React Native",
    description:
      "Udvikling af moderne web- og mobilapplikationer med React og React Native. Fra idé til færdigt produkt — brugervenligt, hurtigt og gennemtænkt.",
    tags: ["React", "React Native", "TypeScript"],
    href: "https://www.andersdev.dk",
    linkLabel: "andersdev.dk",
    accent: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    tagStyle: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    btnStyle:
      "bg-blue-500 hover:bg-blue-600 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Indie Game Developer",
    subtitle: "Selvstændige spilprojekter",
    description:
      "Passioneret indie-spiludvikler bag Quackel. Kreative spilkoncepter med sjæl — fra prototype til udgivelse.",
    tags: ["Indie", "Game Design", "Quackel"],
    href: "https://www.quackel.dk",
    linkLabel: "quackel.dk",
    accent: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "border-violet-200 dark:border-violet-800",
    tagStyle: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
    btnStyle:
      "bg-violet-500 hover:bg-violet-600 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      {/* Hero */}
      <header className="relative overflow-hidden bg-linear-to-br from-zinc-900 to-zinc-800 text-white">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 py-16 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
              <Image
                src={profilePic}
                alt="Anders Peter Sørensen"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Anders Peter Sørensen
            </h1>
            <p className="mt-2 text-lg text-zinc-300">
              Pædagogisk Konsulent · Udvikler · Indie Game Dev
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center sm:items-start text-sm text-zinc-400">
              <a
                href="mailto:contact@anderspsorensen.dk"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                contact@anderspsorensen.dk
              </a>
              <a
                href="tel:+4540974842"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 16.352V17.5a1.5 1.5 0 0 1-1.5 1.5H15c-8.284 0-15-6.716-15-15V3.5Z" clipRule="evenodd" />
                </svg>
                40 97 48 42
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-center text-zinc-500 dark:text-zinc-400 mb-10 text-base">
          Vælg et område for at lære mere
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {roles.map((role) => (
            <a
              key={role.href}
              href={role.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl border ${role.border} ${role.bg} p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${role.accent} text-white mb-4 w-fit shadow`}>
                {role.icon}
              </div>

              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                {role.title}
              </h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 mb-3">
                {role.subtitle}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex-1">
                {role.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${role.tagStyle}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`mt-5 flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-semibold transition-colors ${role.btnStyle}`}>
                <span>{role.linkLabel}</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-4 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <span>© {new Date().getFullYear()} Anders Peter Sørensen</span>
          <div className="flex gap-5">
            <a href="mailto:contact@anderspsorensen.dk" className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
              contact@anderspsorensen.dk
            </a>
            <a href="tel:+4540974842" className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
              40 97 48 42
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
