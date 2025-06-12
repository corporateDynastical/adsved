"use client";

import { useEffect } from "react";

// Extend the global window type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16836865084/o8DDCKn5g6MaELzYuNw-",
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5 py-10 text-center bg-gradient-to-r from-white to-blue-50">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Thank You!
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        You’re in. Let Vedbramha guide what’s next.
      </p>
      <a
        href="/"
        className="inline-block bg-rose-950 text-white px-6 py-2 rounded-lg hover:bg-rose-900 transition"
      >
        Go Back Home
      </a>
    </section>
  );
}
