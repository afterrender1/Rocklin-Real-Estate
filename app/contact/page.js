import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { contact, interestFromSlug } from "../data/contact";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Rocklin Real Estate in St. George, Utah. Call (801) 425-3478 or visit 720 S River Rd, Suite B110. We reply within one business day.",
  path: "/contact",
});

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const icons = {
  phone: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />),
  email: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  office: icon(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  hours: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
};

const Row = ({ label, icon, children }) => (
  <div className="grid gap-1 border-b border-stone-200 py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
    <dt className="flex items-center gap-2.5 text-sm text-stone-500 sm:items-start sm:pt-0.5">
      <span className="text-orange-600">{icon}</span>
      {label}
    </dt>
    <dd className="pl-7 text-stone-900 sm:pl-0">{children}</dd>
  </div>
);

const linkClass = "underline-offset-4 hover:text-orange-700 hover:underline";

export default async function ContactPage({ searchParams }) {
  // ?interest=property-management pre-selects "Property management" in the form
  const { interest } = await searchParams;
  const defaultInterest = interestFromSlug(interest);

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
              <Row label="Phone" icon={icons.phone}>
                <a href={contact.phoneHref} className={linkClass}>{contact.phone}</a>
              </Row>
              <Row label="Email" icon={icons.email}>
                <a href={`mailto:${contact.email}`} className={`break-all ${linkClass}`}>{contact.email}</a>
              </Row>
              <Row label="Office" icon={icons.office}>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {contact.address}
                </a>
              </Row>
              <Row label="Hours" icon={icons.hours}>
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
              <ContactForm {...(defaultInterest && { defaultInterest })} />
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
