"use client";

import { useState } from "react";

export function ContactForm() {
    const [sent, setSent] = useState(false);
    return (
        <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-4"
        >
            {sent ? (
                <div className="py-12 text-center">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold">Thanks!</div>
                    <p className="mt-2 text-sm text-muted-foreground">We&apos;ll be in touch shortly.</p>
                </div>
            ) : (
                <>
                    <div>
                        <label className="text-sm font-medium">Name</label>
                        <input required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input required type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Message</label>
                        <textarea required rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <button className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]">
                        Send message
                    </button>
                </>
            )}
        </form>
    );
}
