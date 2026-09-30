"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Skip smooth scrolling on touch screens and low-power devices; native scroll is cheaper there
const shouldSmoothScroll = () => {
  const lowEnd = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4;
  const touch = window.matchMedia("(pointer: coarse)").matches;
  return !lowEnd && !touch && !prefersReducedMotion();
};

// Starting offsets per data-animate variant (only transform + opacity, GPU friendly)
const variants = {
  "fade-up": { y: 28 },
  fade: {},
  scale: { scale: 0.96 },
  left: { x: -28 },
  right: { x: 28 },
};

const reveal = (targets, extra = {}) =>
  gsap.to(targets, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.08,
    overwrite: true,
    ...extra,
    // Hand transforms back to CSS so Tailwind hover effects keep working
    onComplete: () => gsap.set(targets, { clearProps: "transform,transition" }),
  });

const MotionProvider = ({ children }) => {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync
  useEffect(() => {
    if (!shouldSmoothScroll()) return;

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 }, autoRaf: false });
    lenisRef.current = lenis;
    const raf = (time) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New page: jump to top instantly so Lenis does not smooth-scroll from the old position
  useEffect(() => {
    if (!window.location.hash) lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  // Re-run reveal animations whenever the route changes
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Above-the-fold intro: plays once on load
      const intro = gsap.utils.toArray('[data-animate="hero"]');
      if (intro.length) {
        gsap.set(intro, { y: 30, transition: "none" });
        reveal(intro, { duration: 0.9, stagger: 0.12, delay: 0.1, ease: "power3.out" });
      }

      const heroBg = document.querySelector('[data-animate="hero-bg"]');
      if (heroBg) {
        gsap.fromTo(heroBg, { scale: 1.08 }, { scale: 1, duration: 1.6, ease: "power2.out", clearProps: "transform" });
      }

      // Scroll reveals: batched so many elements share a few tweens
      const items = gsap.utils
        .toArray("[data-animate]")
        .filter((el) => !["hero", "hero-bg"].includes(el.dataset.animate));

      // Sideways slides would poke past the screen edge on phones, so use fade-up there
      const wide = window.matchMedia("(min-width: 1024px)").matches;
      items.forEach((el) => {
        let variant = el.dataset.animate;
        if (!wide && (variant === "left" || variant === "right")) variant = "fade-up";
        gsap.set(el, { ...(variants[variant] || variants["fade-up"]), transition: "none" });
      });

      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => reveal(batch),
        // Coming back up from below also reveals
        onEnterBack: (batch) => reveal(batch),
        // Flung past too fast to animate: just show it, no tween needed
        onLeave: (batch) => gsap.set(batch, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform,transition" }),
      });
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return children;
};

export default MotionProvider;
