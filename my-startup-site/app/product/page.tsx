import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Product — Nebula",
    description: "Discover Nebula's product suite: workflows, analytics, and AI.",
};

const modules = [
    { title: "Workflows", desc: "Visual, no-code automations that connect every tool in your stack.", features: ["200+ integrations", "Conditional logic", "Version control"] },
    { title: "Analytics", desc: "Real-time dashboards and alerts on the metrics that matter.", features: ["Custom KPIs", "SQL & no-code queries", "Slack alerts"] },
    { title: "AI Studio", desc: "Build, fine-tune, and deploy custom models with a few clicks.", features: ["Hosted LLMs", "Vector search", "Eval tooling"] },
];

export default function ProductPage() {
    return (
        <>
            <PageHero eyebrow="Product" title="One platform. Endless possibilities." subtitle="Three powerful modules, designed to work seamlessly together." />
            <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 space-y-10">
                {modules.map((m, i) => (
                    <div key={m.title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                        <div className="lg:[direction:ltr]">
                            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">{m.title}</h2>
                            <p className="mt-4 text-muted-foreground">{m.desc}</p>
                            <ul className="mt-6 space-y-2">
                                {m.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm">
                                        <Check className="h-4 w-4 text-primary" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:[direction:ltr] aspect-video rounded-2xl bg-[var(--gradient-hero)] shadow-[var(--shadow-elegant)] flex items-center justify-center">
                            <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary-foreground/90">{m.title}</span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
