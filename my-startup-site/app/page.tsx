import Link from "next/link";
import { Zap, Shield, BarChart3, Globe, Cpu, Workflow, ArrowRight, Star, Check } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-100ms response times powered by edge infrastructure." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II, end-to-end encryption, SSO ready." },
  { icon: BarChart3, title: "Deep Analytics", desc: "Real-time dashboards that turn data into decisions." },
  { icon: Globe, title: "Global Scale", desc: "Deployed in 30+ regions for low-latency anywhere." },
  { icon: Cpu, title: "AI Powered", desc: "Native LLM integrations and custom model fine-tuning." },
  { icon: Workflow, title: "Smart Automation", desc: "Visual workflows that adapt to your business logic." },
];

const stats = [
  { v: "10M+", l: "Active users" },
  { v: "99.99%", l: "Uptime SLA" },
  { v: "180+", l: "Countries" },
  { v: "4.9/5", l: "Customer rating" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, Lumen Labs", quote: "Nebula cut our deployment time in half and made our infra delightful to work with." },
  { name: "Marcus Wright", role: "Head of Ops, Northwind", quote: "We replaced four tools with Nebula. The team has never been more productive." },
  { name: "Aisha Patel", role: "Founder, Drift", quote: "The analytics alone paid for the platform within the first month." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Star className="h-3 w-3 fill-primary text-primary" /> Trusted by 10,000+ teams worldwide
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build the future,{" "}
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">effortlessly.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Nebula is the AI-native platform that helps modern teams automate workflows,
              analyze data in real-time, and scale globally without limits.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/product" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--gradient-hero)] px-6 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105">
                Explore the product <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-semibold hover:bg-secondary">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl bg-[var(--gradient-hero)] bg-clip-text text-transparent">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need, in one platform</h2>
          <p className="mt-4 text-muted-foreground">Powerful features designed to help teams ship faster and smarter.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Loved by teams everywhere</h2>
            <p className="mt-4 text-muted-foreground">Don't take our word for it.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Built for teams of every size</h2>
            <p className="mt-4 text-muted-foreground">From scrappy startups to global enterprises, Nebula scales with you.</p>
            <ul className="mt-6 space-y-3">
              {["Free tier with generous limits", "Transparent, usage-based pricing", "Dedicated support on Pro+", "Cancel anytime, no contracts"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-[var(--gradient-hero)] p-1 shadow-[var(--shadow-elegant)]">
            <div className="rounded-[1.4rem] bg-card p-8">
              <div className="text-sm font-medium text-muted-foreground">Starter</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold">$0</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Perfect to try Nebula with your team.</p>
              <Link href="/contact" className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-sm font-semibold text-primary-foreground">
                Start free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-10 text-center shadow-[var(--shadow-elegant)] sm:p-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to build with Nebula?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Join thousands of teams shipping faster every day.</p>
          <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-card px-6 text-sm font-semibold text-foreground hover:scale-105 transition-transform">
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
