import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "./ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact — Nebula",
    description: "Get in touch with the Nebula team.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero eyebrow="Contact" title="Let's talk." subtitle="We'd love to hear from you. Drop us a message and we'll respond within 24 hours." />
            <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Mail className="h-5 w-5 text-primary" /></span>
                            <div>
                                <div className="font-semibold">Email</div>
                                <div className="text-sm text-muted-foreground">hello@nebula.app</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Phone className="h-5 w-5 text-primary" /></span>
                            <div>
                                <div className="font-semibold">Phone</div>
                                <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><MapPin className="h-5 w-5 text-primary" /></span>
                            <div>
                                <div className="font-semibold">Office</div>
                                <div className="text-sm text-muted-foreground">100 Market St, San Francisco, CA</div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
