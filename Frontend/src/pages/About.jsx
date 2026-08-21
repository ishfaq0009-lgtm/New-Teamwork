import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaShoppingBag />,
      title: "Quality Products",
      text: "We focus on providing reliable and high-quality products.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "We make every effort to deliver your order quickly.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Shopping",
      text: "Enjoy a safe and comfortable online shopping experience.",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      text: "Our support team is always ready to assist our customers.",
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

            <a href="/about" className="font-bold text-blue-600">
              About
            </a>

            <a href="/products" className="font-medium text-slate-500 hover:text-blue-600">
              Products
            </a>

            <a href="/contact" className="font-medium text-slate-500 hover:text-blue-600">
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
            transition={{ duration: 0.7 }}
          >

            <span className="rounded-full border border-blue-400/30 bg-blue-600/10 px-5 py-2 text-sm font-bold text-blue-300">
              ABOUT SHOPORA
            </span>

            <h1 className="mt-7 text-5xl font-black sm:text-6xl lg:text-7xl">
              Shopping Made
              <span className="block text-blue-500">
                Simple & Better.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Shopora is a modern e-commerce platform created to make
              online shopping simple, secure and enjoyable.
            </p>

          </motion.div>

        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Your Trusted
              <span className="block text-slate-500">
                Online Store.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              Shopora brings together quality products, modern design and
              a simple shopping experience. Our goal is to help customers
              find products they love without making online shopping
              complicated.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              From everyday essentials to premium products, we are focused
              on quality, convenience and customer satisfaction.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="font-semibold">
                  Quality-focused products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="font-semibold">
                  Customer-first service
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="font-semibold">
                  Simple shopping experience
                </span>
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl"
          >

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
              alt="Online shopping"
              className="h-[500px] w-full object-cover"
            />

          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Shopora
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Built Around You
            </h2>

            <p className="mt-5 text-slate-500">
              Everything we do is focused on creating a better shopping
              experience.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {feature.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-950 py-20 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-3">

          <div>
            <FaUsers className="mx-auto text-3xl text-blue-500" />
            <h3 className="mt-4 text-4xl font-black">
              10K+
            </h3>
            <p className="mt-2 text-slate-400">
              Happy Customers
            </p>
          </div>

          <div>
            <FaShoppingBag className="mx-auto text-3xl text-blue-500" />
            <h3 className="mt-4 text-4xl font-black">
              1000+
            </h3>
            <p className="mt-2 text-slate-400">
              Products
            </p>
          </div>

          <div>
            <FaStar className="mx-auto text-3xl text-blue-500" />
            <h3 className="mt-4 text-4xl font-black">
              4.9/5
            </h3>
            <p className="mt-2 text-slate-400">
              Customer Rating
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-8 py-16 text-center text-white">

          <FaHeart className="mx-auto text-4xl" />

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Start Shopping Today
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-blue-100">
            Discover products you'll love and enjoy a simple,
            professional shopping experience.
          </p>

          <a
            href="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-slate-950 hover:bg-slate-100"
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

          <p className="text-sm text-slate-500">
            © 2026 Shopora. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default About;