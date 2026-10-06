"use client";

import { useState } from "react";
import Image from "next/image";

const inputClass =
  // 16px text on phones stops iOS from zooming into inputs on focus
  "w-full min-w-0 rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-base text-stone-900 sm:text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/15";

const AgentContact = ({ agent, propertyName }) => {
  const [mode, setMode] = useState("tour");
  const [tourType, setTourType] = useState("In person");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      {/* Agent */}
      <div className="flex items-center gap-4 border-b border-stone-100 p-5">
        {agent.image ? (
          <Image
            src={agent.image}
            alt={agent.name}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover object-[50%_20%]"
          />
        ) : (
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-stone-200 text-lg font-semibold text-stone-700">
            {agent.initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-stone-900">{agent.name}</p>
          <p className="truncate text-sm text-stone-500">{agent.role}</p>
          {agent.location && <p className="mt-0.5 truncate text-xs text-stone-500">{agent.location}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 px-5 pt-4">
        <a href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`} className="flex items-center justify-center gap-2 rounded-lg border border-stone-300 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
          </svg>
          Call
        </a>
        <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 rounded-lg border border-stone-300 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          Email
        </a>
      </div>

      <div className="p-5">
        {/* Tabs */}
        <div className="grid grid-cols-2 border-b border-stone-200 text-sm font-medium">
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
              className={`-mb-px border-b-2 py-2.5 transition ${mode === key ? "border-orange-600 text-stone-900" : "border-transparent text-stone-500 hover:text-stone-900"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {sent ? (
          <div className="mt-6 rounded-xl bg-stone-50 p-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white">
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
                      className={`rounded-lg border py-2 text-sm font-medium transition ${
                        tourType === t ? "border-orange-600 bg-orange-50 text-orange-800" : "border-stone-300 text-stone-600 hover:bg-stone-50"
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
              className="w-full rounded-lg bg-orange-600 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
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
