"use client";

import { useState } from "react";

const inputClass =
  // 16px text on phones stops iOS from zooming into inputs on focus
  "w-full min-w-0 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-stone-900 sm:text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

const interests = ["Buying", "Selling", "Renting", "Investing"];

const ContactForm = () => {
  const [interest, setInterest] = useState(interests[0]);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-emerald-50 p-10 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 5 5 9-10" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-stone-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-stone-600">Your message has been received. One of our agents will contact you within one business day.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-emerald-500 hover:text-emerald-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8"
    >
      <div>
        <p className="text-sm font-medium text-stone-700">I&apos;m interested in</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterest(i)}
              aria-pressed={interest === i}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                interest === i ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-stone-200 text-stone-600 hover:border-stone-300"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full name" aria-label="Full name" className={inputClass} />
        <input required type="email" placeholder="Email address" aria-label="Email address" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="tel" placeholder="Phone number" aria-label="Phone number" className={inputClass} />
        <select aria-label="Budget" defaultValue="" className={inputClass}>
          <option value="" disabled>Budget</option>
          <option>Under $1M</option>
          <option>$1M – $3M</option>
          <option>$3M – $5M</option>
          <option>$5M+</option>
        </select>
      </div>
      <textarea required rows={5} placeholder="How can we help you?" aria-label="Message" className={`${inputClass} resize-none`} />
      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
