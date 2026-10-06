"use client";

import { useState } from "react";
import { formatPrice } from "../../data/properties";

const Slider = ({ label, value, display, min, max, step, onChange }) => (
  <label className="block">
    <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm">
      <span className="text-stone-500">{label}</span>
      <span className="font-semibold text-stone-900">{display}</span>
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="mt-3 w-full cursor-pointer accent-orange-600"
    />
  </label>
);

const MortgageCalculator = ({ price }) => {
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const down = (price * downPct) / 100;
  const loan = price - down;
  const r = rate / 100 / 12;
  const n = years * 12;
  const monthly = r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n));
  const tax = (price * 0.011) / 12;
  const insurance = (price * 0.0035) / 12;
  const total = monthly + tax + insurance;

  const parts = [
    { label: "Principal & interest", value: monthly, color: "bg-orange-600" },
    { label: "Property tax", value: tax, color: "bg-orange-300" },
    { label: "Home insurance", value: insurance, color: "bg-stone-300" },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <Slider label="Down payment" value={downPct} display={`${downPct}% · ${formatPrice(down)}`} min={5} max={60} step={1} onChange={setDownPct} />
        <Slider label="Interest rate" value={rate} display={`${rate.toFixed(1)}%`} min={2} max={10} step={0.1} onChange={setRate} />
        <Slider label="Loan term" value={years} display={`${years} years`} min={10} max={30} step={5} onChange={setYears} />
      </div>

      <div className="rounded-2xl bg-stone-900 p-6 text-white">
        <p className="text-sm text-white/60">Estimated monthly payment</p>
        <p className="mt-1 text-3xl font-bold sm:text-4xl">{formatPrice(total)}</p>

        <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-white/10">
          {parts.map((p) => (
            <span key={p.label} className={p.color} style={{ width: `${(p.value / total) * 100}%` }} />
          ))}
        </div>

        <ul className="mt-5 space-y-2.5 text-sm">
          {parts.map((p) => (
            <li key={p.label} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-white/70">
                <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                {p.label}
              </span>
              <span className="font-medium">{formatPrice(p.value)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-white/10 pt-4 text-xs text-white/50">
          Loan amount {formatPrice(loan)}. Estimates only — contact an agent for a personalised quote.
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
