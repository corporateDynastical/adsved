
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} Vedbramha. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
  Privacy Policy
</Link>

          {/* You can add more links here if needed */}
        </div>
      </div>
    </footer>
  );
}
