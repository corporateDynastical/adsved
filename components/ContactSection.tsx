"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_40b20ow",
        "template_kpu3m9o",
        form.current,
        "_bKWFFib_B96pgH5g"
      )
      .then(
        () => {
          form.current?.reset();
          router.push("/thank-you");
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-24 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form - Show First on Mobile */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="order-1 lg:order-none w-full bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Send Us a Message</h3>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="user_mobile"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="+91 9876543210"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Service <span className="text-red-500">*</span>
            </label>
            <select
              name="user_service"
              className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="Astrology">Astrology</option>
              <option value="Vastu">Vastu</option>
              <option value="Kundali Making">Kundali Making</option>
              <option value="Pooja">Pooja</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Comments (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your comments..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-950 text-white py-3 font-semibold rounded-lg hover:bg-rose-900 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info - Show Second on Mobile */}
        <div className="order-2 lg:order-none">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Contact Us</h2>
          <p className="mb-6 text-gray-600 text-lg">
            We'd love to hear from you. Reach out using the details below or send us a message.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <p><strong>📞 Phone:</strong> +91-8087401984</p>
            <p><strong>✉️ Email:</strong> contact@vedbramha.com</p>
            <p><strong>✉️ Email:</strong> info@vedbramha.com</p>
            <p><strong>📍 Address 1:</strong><br />
              Prabhat Road, Lane No. 2, Ranade Bungalow, Opp. PYC Deccan Ground, Pune 411004</p>
            <p><strong>📍 Address 2:</strong><br />
              17/130, Anand Nagar, Nehru Road, Near Vakola Police Station, Santacruz East - 400055</p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="https://www.facebook.com/vedbramhaastrology/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/vedbramha/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCZ7AAHd8nbIoBVY8_TKKhrg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
