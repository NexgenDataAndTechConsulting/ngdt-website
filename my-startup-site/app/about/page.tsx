import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
    title: "About — Nebula",
    description: "Learn about Nebula's mission to build intelligent, human-centered software.",
};

const values = [
    { title: "Customer obsession", desc: "We start with the customer and work backwards." },
    { title: "Bias for action", desc: "Speed matters. We ship, learn, iterate." },
    { title: "Long-term thinking", desc: "We optimize for years, not quarters." },
];

export default function AboutPage() {
    return (
        <>
            <PageHero eyebrow="Our story" title="We're building software with soul." subtitle="Founded in 2021, Nebula is a remote-first team of engineers, designers, and dreamers reimagining how teams work together." />
            <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="prose prose-lg mx-auto text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                        Nebula was born from a simple frustration: the tools we use every day weren&apos;t designed
                        for the way modern teams actually work. So we set out to build something different — a
                        platform that&apos;s powerful enough for enterprises, simple enough for startups, and
                        delightful for everyone in between.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {values.map((v) => (
                        <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{v.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
