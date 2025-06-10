import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full relative">
        <Image
          src="/hero.png" // Change this to your image path
          alt="Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
}