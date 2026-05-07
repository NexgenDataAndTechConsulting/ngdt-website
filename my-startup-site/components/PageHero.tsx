export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
    return (
        <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-soft)" }}>
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 text-center">
                {eyebrow && (
                    <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                        {eyebrow}
                    </span>
                )}
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
                {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
            </div>
        </section>
    );
}
