"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/product", label: "Product" },
    { to: "/services", label: "Services" },
    { to: "/teams", label: "Teams" },
    { to: "/contact", label: "Contact" },
] as const;

export function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (to: string) => pathname === to;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground">
                        <Sparkles className="h-4 w-4" />
                    </span>
                    Nebula
                </Link>
                <nav className="hidden items-center gap-1 md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            href={l.to}
                            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground hover:bg-secondary ${isActive(l.to) ? "text-foreground bg-secondary" : "text-muted-foreground"
                                }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="inline-flex h-9 items-center rounded-md bg-[var(--gradient-hero)] px-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
                    >
                        Get started
                    </Link>
                </div>
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>
            {open && (
                <nav className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            href={l.to}
                            onClick={() => setOpen(false)}
                            className={`rounded-md px-3 py-2 text-sm font-medium hover:text-foreground ${isActive(l.to) ? "text-foreground bg-secondary" : "text-muted-foreground"
                                }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
