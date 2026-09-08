import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope,
  Ear,
  Smile,
  Heart,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import heroImg from "@/assets/hero-clinic.jpg";
import aboutImg from "@/assets/about-doctor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Daniela Vizcarra Medical Clinic | JBR Dubai",
      },
      {
        name: "description",
        content:
          "Expert care, close to home. General Physician, ENT, Dentist & Cardiologist services at Murjan 2, JBR, Dubai. Book your appointment today.",
      },
      {
        property: "og:title",
        content: "Daniela Vizcarra Medical Clinic | JBR Dubai",
      },
      {
        property: "og:description",
        content:
          "Expert care, close to home. General Physician, ENT, Dentist & Cardiologist services at Murjan 2, JBR, Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Specialties", href: "#specialties" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const specialties = [
  {
    title: "General Physician",
    description: "Comprehensive primary care for everyday health needs and preventive check-ups.",
    icon: Stethoscope,
  },
  {
    title: "ENT",
    description: "Expert diagnosis and treatment for ear, nose, throat, and allergy concerns.",
    icon: Ear,
  },
  {
    title: "Dentist",
    description: "Preventive, restorative, and cosmetic dental care for the whole family.",
    icon: Smile,
  },
  {
    title: "Cardiologist",
    description: "Heart health screenings, diagnostics, and cardiovascular consultations.",
    icon: Heart,
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 text-primary">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Daniela Vizcarra
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="tel:+971508191687">Book an appointment</a>
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <a href="tel:+971508191687">Book an appointment</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start text-primary-foreground">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  Now accepting new patients
                </span>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Daniela Vizcarra Medical Clinic
                </h1>
                <p className="mt-4 max-w-lg text-lg text-primary-foreground/90 sm:text-xl">
                  Expert care, close to home. Trusted medical services in the heart of JBR, Dubai.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <a href="tel:+971508191687">Book an appointment</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    <a href="#specialties">Our specialties</a>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 shadow-2xl ring-1 ring-white/20">
                  <img
                    src={heroImg}
                    alt="Modern and welcoming clinic interior at Daniela Vizcarra Medical Clinic"
                    width={1344}
                    height={896}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section id="specialties" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Specialties
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A full range of medical services to keep you and your family healthy.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {specialties.map((specialty) => {
                const Icon = specialty.icon;
                return (
                  <Card
                    key={specialty.title}
                    className="group transition-shadow hover:shadow-md"
                  >
                    <CardHeader>
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{specialty.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {specialty.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border bg-muted/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-lg">
                  <img
                    src={aboutImg}
                    alt="A doctor at Daniela Vizcarra Medical Clinic providing compassionate care"
                    width={800}
                    height={1008}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Daniela Vizcarra Medical Clinic is a trusted healthcare provider in JBR, Dubai.
                  We bring together experienced physicians across multiple specialties to deliver
                  personalized, patient-centered care in a modern and welcoming environment.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Whether you need a routine check-up, specialist consultation, or ongoing
                  treatment, our team is committed to helping you feel your best.
                </p>
                <ul className="mt-8 space-y-3 text-foreground">
                  {[
                    "Compassionate, patient-first approach",
                    "Experienced, multilingual medical team",
                    "Modern facilities in the heart of JBR",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Visit us at Murjan 2, JBR, or call to book your appointment.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Address</CardTitle>
                    <CardDescription className="text-sm">
                      Murjan 2, JBR, Dubai
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a
                      href="https://maps.google.com/?q=Murjan+2,JBR,Dubai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Phone</CardTitle>
                    <CardDescription className="text-sm">+971 50 819 1687</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild size="sm" className="w-full">
                    <a href="tel:+971508191687">Call now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Opening Hours</CardTitle>
                    <CardDescription className="text-sm">Mon – Sat: 9am – 9pm</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Closed on Sunday</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Daniela Vizcarra Medical Clinic · built by Marco the Novio
          </p>
        </div>
      </footer>
    </div>
  );
}
