import {
  Code2Icon,
  DatabaseIcon,
  ShieldCheckIcon,
  RocketIcon,
  BriefcaseIcon,
} from "lucide-react"

import { Reveal } from "@/components/landing/reveal"
import type { ProfilLulusanItem } from "@/types"

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Software Developer": Code2Icon,
  "Data Analyst / Data Scientist": DatabaseIcon,
  "Network & Security Engineer": ShieldCheckIcon,
  Technopreneur: RocketIcon,
}

export function ProfilLulusan({ items }: { items: ProfilLulusanItem[] }) {
  return (
    <section id="profil-lulusan" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <Reveal>
        <span className="text-xs font-semibold tracking-wider text-primary uppercase">
          Lulusan
        </span>
        <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">
          Prospek Karir Lulusan
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
        {items.map(({ judul, deskripsi }, i) => {
          const Icon = roleIcons[judul] ?? BriefcaseIcon
          const isCore = i === 0

          return (
            <Reveal key={judul} delay={i * 80}>
              <div
                className={`flex h-full flex-col justify-between gap-4 rounded-2xl border p-6 transition-colors hover:border-lime ${
                  isCore ? "bg-card/90 border-lime/30" : "bg-card/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="size-7 text-lime" />
                    {isCore && (
                      <span className="rounded-full bg-lime/10 px-2 py-0.5 text-[10px] font-semibold text-lime">
                        Utama
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-bold">{judul}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{deskripsi}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}