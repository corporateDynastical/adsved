"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[1920/700] md:aspect-[1920/700]">
        <Image
          src="/vedbramha.jpg" // Path to your image
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
