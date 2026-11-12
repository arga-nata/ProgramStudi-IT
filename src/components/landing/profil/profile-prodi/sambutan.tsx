import { QuoteIcon, UserIcon } from "lucide-react"

import type { Sambutan as SambutanType } from "@/types"
import { Reveal } from "@/components/landing/reveal"

export function Sambutan({ data }: { data: SambutanType }) {
  const isPlaceholder = data.nama.startsWith("[")
  const initials = isPlaceholder
    ? null
    : data.nama
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <Reveal className="grid gap-8 rounded-3xl border bg-card p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-start">
        <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
          <div
            aria-label="Foto Kepala Program Studi"
            className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-lime/10 font-heading text-2xl font-extrabold text-lime"
          >
            {initials ? initials : <UserIcon className="size-8 text-lime/70" />}
          </div>
          <div className="md:mt-1">
            <p className="font-bold">{data.nama}</p>
            <p className="text-sm text-muted-foreground">{data.jabatan}</p>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-8">
          <QuoteIcon className="absolute -top-2 left-0 size-6 text-lime/20 sm:size-8" />
          <span className="mb-3 inline-block text-xs font-semibold tracking-wider text-primary uppercase">
            Sambutan
          </span>
          <div className="flex flex-col gap-4">
            {data.isi.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}