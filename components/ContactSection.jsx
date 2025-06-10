"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40b20ow",     // Your Service ID
        "template_kpu3m9o",    // Your Template ID
        form.current,
        "_bKWFFib_B96pgH5g"    // Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Optional: clear form after submit
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Contact Us</h2>
          <p className="mb-4 text-gray-700">
            We'd love to hear from you! Reach out to us using the details below or fill out the form.
          </p>
          <div className="space-y-4 text-gray-800 text-sm">
            <p><strong>📞 Phone:</strong> +91-8087401984</p>
            <p><strong>✉️ Email:</strong> contact@vedbramha.com</p>
            <p><strong>✉️ Email:</strong> info@vedbramha.com</p>
            <p><strong>📍 Address 1:</strong> Prabhat Road, Lane No. 2, Ranade Bungalow, Opp. PYC Deccan Ground, Pune 411004</p>
            <p><strong>📍 Address 2:</strong> 17/130, Anand Nagar, Nehru Road, Near Vakola Police Station, Santacruz East - 400055</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="tel"
              name="user_mobile"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+91 9876543210"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
