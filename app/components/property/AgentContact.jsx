"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

const AgentContact = ({ agent, propertyName }) => {
  const [mode, setMode] = useState("tour");
  const [tourType, setTourType] = useState("In person");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5">
      {/* Agent */}
      <div className="flex items-center gap-4 border-b border-stone-100 p-6">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white">
          {agent.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-stone-900">{agent.name}</p>
          <p className="truncate text-sm text-stone-500">{agent.role}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-stone-500">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400">
              <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
            </svg>
            {agent.rating.toFixed(1)} · {agent.listings} listings
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-6 pt-5">
        <a href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`} className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 py-2.5 text-sm font-medium text-stone-700 transition hover:border-emerald-500 hover:text-emerald-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
          </svg>
          Call
        </a>
        <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 py-2.5 text-sm font-medium text-stone-700 transition hover:border-emerald-500 hover:text-emerald-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          Email
        </a>
      </div>

      <div className="p-6">
        {/* Tabs */}
        <div className="grid grid-cols-2 rounded-xl bg-stone-100 p-1 text-sm font-medium">
          {[
            ["tour", "Schedule a Tour"],
            ["info", "Request Info"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setMode(key);
                setSent(false);
              }}
              className={`rounded-lg py-2 transition ${mode === key ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {sent ? (
          <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5 9-10" />
              </svg>
            </div>
            <p className="mt-3 font-semibold text-stone-900">Request sent!</p>
            <p className="mt-1 text-sm text-stone-600">
              {agent.name.split(" ")[0]} will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            {mode === "tour" && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  {["In person", "Video call"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTourType(t)}
                      className={`rounded-xl border py-2.5 text-sm font-medium transition ${
                        tourType === t ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-stone-200 text-stone-600 hover:border-stone-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" required aria-label="Tour date" className={inputClass} />
                  <select required aria-label="Tour time" defaultValue="" className={inputClass}>
                    <option value="" disabled>Time</option>
                    {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            <input required placeholder="Full name" aria-label="Full name" className={inputClass} />
            <input required type="email" placeholder="Email address" aria-label="Email address" className={inputClass} />
            <input type="tel" placeholder="Phone number" aria-label="Phone number" className={inputClass} />
            <textarea
              rows={3}
              aria-label="Message"
              defaultValue={`I'm interested in ${propertyName}. Please send me more details.`}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
            >
              {mode === "tour" ? "Request a Tour" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AgentContact;
