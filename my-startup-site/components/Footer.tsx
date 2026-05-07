import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground">
                                <Sparkles className="h-4 w-4" />
                            </span>
                            Nebula
                        </Link>
                        <p className="mt-3 text-sm text-muted-foreground">Building the future of intelligent workflows.</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                            <li><Link href="/teams" className="hover:text-foreground">Teams</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Product</h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/product" className="hover:text-foreground">Features</Link></li>
                            <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Follow</h4>
                        <div className="mt-3 flex gap-3 text-muted-foreground">
                            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
                            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Nebula Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
