import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | Skyline Real Estate",
  description: "Get in touch with Skyline Real Estate. Our agents reply within one business day.",
};

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const contactInfo = [
  {
    label: "Call us",
    value: "+1 (310) 555-0100",
    href: "tel:+13105550100",
    icon: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />),
  },
  {
    label: "Email us",
    value: "hello@skyline.estate",
    href: "mailto:hello@skyline.estate",
    icon: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  },
  {
    label: "Office hours",
    value: "Mon – Sat, 9:00 AM – 7:00 PM",
    icon: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  },
];

const offices = [
  { city: "Los Angeles", address: "9454 Wilshire Blvd, Beverly Hills, CA" },
  { city: "Marbella", address: "Av. Ricardo Soriano 12, Marbella" },
  { city: "Zurich", address: "Bahnhofstrasse 45, 8001 Zürich" },
  { city: "Dubai", address: "Boulevard Plaza, Downtown Dubai" },
];

export default function ContactPage() {
  return (
    <main className="bg-stone-50">
      <PageHeader
        crumb="Contact"
        title="Let's Find Your"
        highlight="Perfect Home"
        description="Tell us what you're looking for and an agent will reach out within one business day."
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8 lg:py-20">
        {/* Info */}
        <div data-animate="left" className="space-y-4 lg:col-span-2">
          {contactInfo.map((c) => {
            const content = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  {c.icon}
                </span>
                <span>
                  <span className="block text-sm text-stone-500">{c.label}</span>
                  <span className="block font-semibold text-stone-900">{c.value}</span>
                </span>
              </>
            );
            const cls = "group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-colors hover:border-emerald-400";
            return c.href ? (
              <a key={c.label} href={c.href} className={cls}>{content}</a>
            ) : (
              <div key={c.label} className={cls}>{content}</div>
            );
          })}

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="font-semibold text-stone-900">Our offices</p>
            <ul className="mt-4 space-y-3">
              {offices.map((o) => (
                <li key={o.city} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>
                    <span className="block font-medium text-stone-800">{o.city}</span>
                    <span className="text-stone-500">{o.address}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div data-animate="fade-up" className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>

      <div data-animate="fade-up" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 sm:aspect-[21/9]">
          <iframe
            title="Skyline Los Angeles office"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(offices[0].address)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </main>
  );
}
