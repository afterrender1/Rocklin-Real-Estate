"use client";

import { useState } from "react";

const inputClass =
  // 16px text on phones stops iOS from zooming into inputs on focus
  "mt-1.5 w-full min-w-0 rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-base text-stone-900 sm:text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/15";

const labelClass = "block text-sm font-medium text-stone-700";

const interests = ["Buying", "Selling", "Renting", "Property management"];

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-xl border border-stone-200 p-8">
        <p className="font-semibold text-stone-900">Thanks, your message has been sent.</p>
        <p className="mt-1 text-sm text-stone-600">We&apos;ll get back to you within one business day.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-medium text-orange-700 underline-offset-4 hover:underline"
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
      className="space-y-5 rounded-xl border border-stone-200 p-5 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Full name
          <input required name="name" autoComplete="name" className={inputClass} />
        </label>
        <label className={labelClass}>
          Email
          <input required type="email" name="email" autoComplete="email" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Phone <span className="font-normal text-stone-400">(optional)</span>
          <input type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </label>
        <label className={labelClass}>
          I&apos;m interested in
          <select name="interest" defaultValue={interests[0]} className={inputClass}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={labelClass}>
        Message
        <textarea required name="message" rows={5} className={`${inputClass} resize-y`} />
      </label>
      <button
        type="submit"
        className="w-full rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
