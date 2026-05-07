import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
    title: "Teams — Nebula",
    description: "Meet the people building Nebula.",
};

const team = [
    { name: "Ava Rodriguez", role: "Co-founder & CEO", initials: "AR" },
    { name: "Liam Park", role: "Co-founder & CTO", initials: "LP" },
    { name: "Sofia Nguyen", role: "Head of Design", initials: "SN" },
    { name: "Daniel Kim", role: "Head of Engineering", initials: "DK" },
    { name: "Maya Johansson", role: "VP of Product", initials: "MJ" },
    { name: "Ethan Brooks", role: "Head of Sales", initials: "EB" },
    { name: "Priya Shah", role: "Head of Marketing", initials: "PS" },
    { name: "Noah Williams", role: "Head of People", initials: "NW" },
];

export default function TeamsPage() {
    return (
        <>
            <PageHero eyebrow="Our team" title="The humans behind Nebula." subtitle="A diverse team across 14 countries, united by a love for great software." />
            <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {team.map((m) => (
                        <div key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gradient-hero)] font-[family-name:var(--font-display)] text-2xl font-bold text-primary-foreground">
                                {m.initials}
                            </div>
                            <h3 className="mt-4 font-semibold">{m.name}</h3>
                            <p className="text-sm text-muted-foreground">{m.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
