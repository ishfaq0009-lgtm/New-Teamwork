import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaShoppingBag,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      text: "Bannu City, Khyber Pakhtunkhwa, Pakistan",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      text: "0335 9425525",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      text: "ishfaqkhan@gmail.com",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      text: "Mon - Sat: 9:00 AM - 8:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <FaShoppingBag />
            </div>

            <h1 className="text-xl font-black">
              Shop<span className="text-blue-600">ora</span>
            </h1>

          </a>

          <div className="hidden items-center gap-8 md:flex">

            <a href="/" className="font-medium text-slate-500 hover:text-blue-600">
              Home
            </a>

            <a href="/about" className="font-medium text-slate-500 hover:text-blue-600">
              About
            </a>

            <a href="/products" className="font-medium text-slate-500 hover:text-blue-600">
              Products
            </a>

            <a href="/contact" className="font-bold text-blue-600">
              Contact
            </a>

          </div>

          <a
            href="/products"
            className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
          >
            Shop Now
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-slate-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <span className="rounded-full border border-blue-400/30 bg-blue-600/10 px-5 py-2 text-sm font-bold text-blue-300">
              GET IN TOUCH
            </span>

            <h1 className="mt-7 text-5xl font-black sm:text-6xl">
              Let's Talk
              <span className="block text-blue-500">
                With Us.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have a question or need help? Our team is ready to help you.
            </p>

          </motion.div>

        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-white py-20">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              We'd Love To
              <span className="block text-slate-500">
                Hear From You.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Whether you have a question about products, orders or
              delivery, feel free to contact our team.
            </p>

            {/* EMAIL */}
            <div className="mt-10 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email us
                </p>

                <p className="font-bold">
                  ishfaqkhan@gmail.com
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="mt-6 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Call us
                </p>

                <p className="font-bold">
                  0335 9425525
                </p>
              </div>

            </div>

            {/* LOCATION */}
            <div className="mt-6 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Visit us
                </p>

                <p className="font-bold">
                  Bannu City, Khyber Pakhtunkhwa
                </p>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="mt-10 flex gap-3">

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white hover:bg-blue-600">
                <FaFacebookF />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white hover:bg-blue-600">
                <FaInstagram />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white hover:bg-blue-600">
                <FaTwitter />
              </button>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
          >

            <h3 className="text-3xl font-black">
              Send Us A Message
            </h3>

            <p className="mt-2 text-slate-500">
              We will get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-16 text-center text-white">

          <h2 className="text-4xl font-black sm:text-5xl">
            Ready To Start Shopping?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Discover our premium products and enjoy a better shopping
            experience.
          </p>

          <a
            href="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
          >
            Explore Products
            <FaArrowRight />
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 sm:flex-row">

          <div>
            <h3 className="text-xl font-black">
              Shop<span className="text-blue-500">ora</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Modern shopping. Better experience.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            <p>📍 Bannu City, Khyber Pakhtunkhwa</p>
            <p className="mt-1">📞 0335 9425525</p>
            <p className="mt-1">✉️ ishfaqkhan@gmail.com</p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Shopora. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Contact;