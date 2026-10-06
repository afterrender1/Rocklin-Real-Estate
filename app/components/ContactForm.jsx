"use client";

import { useState } from "react";
import { submitEnquiry } from "./submitEnquiry";
import { interests } from "../data/contact";

const inputClass =
  // 16px text on phones stops iOS from zooming into inputs on focus
  "mt-1.5 w-full min-w-0 rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-base text-stone-900 sm:text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/15";

const labelClass = "block text-sm font-medium text-stone-700";

const ContactForm = ({ defaultInterest = interests[0] }) => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const err = await submitEnquiry({ type: "contact", ...Object.fromEntries(new FormData(form)) });
    if (err) {
      setError(err);
      setStatus("idle");
      return;
    }
    form.reset();
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-stone-200 p-8">
        <p className="font-semibold text-stone-900">Thanks, your message has been sent.</p>
        <p className="mt-1 text-sm text-stone-600">We&apos;ll get back to you within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-orange-700 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-stone-200 p-5 sm:p-7">
      {/* Honeypot: hidden from people, filled in by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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
          <select name="interest" defaultValue={defaultInterest} className={inputClass}>
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

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
