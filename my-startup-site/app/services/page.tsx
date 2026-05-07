import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Rocket, Headphones, GraduationCap, Wrench } from "lucide-react";

export const metadata: Metadata = {
    title: "Services — Nebula",
    description: "Professional services: onboarding, training, and dedicated support.",
};

const services = [
    { icon: Rocket, title: "Onboarding", desc: "White-glove implementation by our solutions team." },
    { icon: GraduationCap, title: "Training", desc: "Live workshops and certifications for your whole org." },
    { icon: Wrench, title: "Custom Builds", desc: "Bespoke integrations and workflows built for you." },
    { icon: Headphones, title: "Premium Support", desc: "24/7 dedicated channel with sub-hour response." },
];

export default function ServicesPage() {
    return (
        <>
            <PageHero eyebrow="Services" title="Expert help, every step of the way." subtitle="Partner with our team to get the most out of Nebula." />
            <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s) => (
                        <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground">
                                <s.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
