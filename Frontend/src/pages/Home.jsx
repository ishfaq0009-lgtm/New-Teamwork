import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Quick and reliable delivery right to your doorstep.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Shopping",
      text: "Your privacy and security are our top priority.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "Our friendly support team is always ready to help.",
    },
  ];

  const products = [
    {
      name: "Premium Headphones",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Modern Sneakers",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Classic Watch",
      price: "$189",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
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

            <div>
              <h1 className="text-xl font-black">
                Shop<span className="text-blue-600">ora</span>
              </h1>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Online Store
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className="font-bold text-slate-900">
              Home
            </a>

            <a
              href="/about"
              className="font-medium text-slate-500 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="/products"
              className="font-medium text-slate-500 hover:text-blue-600"
            >
              Products
            </a>

            <a
              href="/contact"
              className="font-medium text-slate-500 hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          <a
            href="/products"
            className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Shop Now
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-600/10 px-5 py-2 text-sm font-bold text-blue-300">
              PREMIUM ONLINE SHOPPING
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Shop Smarter.
              <span className="block text-blue-500">
                Live Better.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Discover premium products, modern fashion and everyday
              essentials — all in one professional online store.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="/products"
                className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Explore Products
                <FaArrowRight />
              </a>

              <a
                href="/about"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                About Us
              </a>

            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="text-sm text-slate-300">
                4.9/5 from happy customers
              </span>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                alt="Shopping"
                className="h-[500px] w-full rounded-[1.5rem] object-cover"
              />

            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FaShoppingBag />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Products
                  </p>
                  <p className="font-black">
                    1000+ Items
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-3">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
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

      {/* PRODUCTS */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Featured Collection
              </span>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Popular Products
              </h2>

              <p className="mt-4 max-w-xl text-slate-500">
                Explore some of our most popular products selected for
                quality, style and value.
              </p>
            </div>

            <a
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700"
            >
              View All
              <FaArrowRight />
            </a>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">

            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white">
                    <FaHeart />
                  </button>
                </div>

                <div className="p-6">

                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h3 className="mt-4 text-xl font-black">
                    {product.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-2xl font-black text-blue-600">
                      {product.price}
                    </span>

                    <a
                      href="/products"
                      className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-900"
                    >
                      Shop
                    </a>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-black sm:text-6xl">
            Your Next Favorite
            <span className="block text-blue-500">
              Product Is Waiting.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start exploring our collection today and experience
            shopping made simple.
          </p>

          <a
            href="/products"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Start Shopping
            <FaArrowRight />
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 sm:flex-row sm:items-center">

          <div>
            <h3 className="text-xl font-black">
              Shop<span className="text-blue-500">ora</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Modern shopping. Better experience.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/products" className="hover:text-white">Products</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Shopora
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Home;