import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { contact } from "../data/contact";

export const metadata = {
  title: "Contact | Rocklin Real Estate",
  description: "Get in touch with Rocklin Real Estate. We reply within one business day.",
};

const Row = ({ label, children }) => (
  <div className="grid gap-1 border-b border-stone-200 py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
    <dt className="text-sm text-stone-500">{label}</dt>
    <dd className="text-stone-900">{children}</dd>
  </div>
);

const linkClass = "underline-offset-4 hover:text-orange-700 hover:underline";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Solid strip behind the transparent navbar */}
      <div className="h-20 bg-stone-950 sm:h-24" />

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 pt-6 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900 hover:underline">Home</Link>
          <span aria-hidden="true">›</span>
          <span className="text-stone-900">Contact</span>
        </nav>

        <header className="mt-8 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Contact us</h1>
          <p className="mt-3 leading-relaxed text-stone-600 sm:text-lg">
            Buying, selling, renting or need help managing a property? Send us a message and we&apos;ll get back to you
            within one business day.
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <section aria-labelledby="details-heading">
            <h2 id="details-heading" className="text-lg font-semibold text-stone-900">Get in touch</h2>
            <dl className="mt-3 border-t border-stone-200">
              <Row label="Phone">
                <a href={contact.phoneHref} className={linkClass}>{contact.phone}</a>
              </Row>
              <Row label="Email">
                <a href={`mailto:${contact.email}`} className={`break-all ${linkClass}`}>{contact.email}</a>
              </Row>
              <Row label="Office">
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {contact.address}
                </a>
              </Row>
              <Row label="Hours">
                <ul className="space-y-1">
                  {contact.hours.map(([days, time]) => (
                    <li key={days}>
                      {days}: <span className="text-stone-600">{time}</span>
                    </li>
                  ))}
                </ul>
              </Row>
            </dl>
          </section>

          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-lg font-semibold text-stone-900">Send a message</h2>
            <div className="mt-3">
              <ContactForm />
            </div>
          </section>
        </div>

        <div className="mt-16 aspect-[16/9] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 sm:aspect-[21/9]">
          <iframe
            title="Rocklin Real Estate office, St. George"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </main>
  );
}
