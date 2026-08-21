import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      category: "Electronics",
      price: 129,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Classic Wrist Watch",
      category: "Accessories",
      price: 189,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Modern Sneakers",
      category: "Fashion",
      price: 99,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Premium Backpack",
      category: "Fashion",
      price: 79,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Smartphone",
      category: "Electronics",
      price: 599,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Wireless Speaker",
      category: "Electronics",
      price: 89,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Stylish Sunglasses",
      category: "Accessories",
      price: 59,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Minimal Chair",
      category: "Home",
      price: 149,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

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

            <a href="/products" className="font-bold text-blue-600">
              Products
            </a>

            <a href="/contact" className="font-medium text-slate-500 hover:text-blue-600">
              Contact
            </a>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">
            <FaShoppingCart />
            Cart
          </button>

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
              OUR COLLECTION
            </span>

            <h1 className="mt-7 text-5xl font-black sm:text-6xl">
              Explore Our
              <span className="block text-blue-500">
                Products
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Discover premium products carefully selected for your
              lifestyle, comfort and everyday needs.
            </p>

          </motion.div>

        </div>
      </section>

      {/* PRODUCTS */}
      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* SEARCH */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="relative w-full md:max-w-md">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          <p className="font-semibold text-slate-500">
            {filteredProducts.length} Products Available
          </p>

        </div>

        {/* CATEGORIES */}
        <div className="mb-12 flex flex-wrap gap-3">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* GRID */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProducts.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white">
                  {product.category}
                </span>

                <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white">
                  <FaHeart />
                </button>

              </div>

              <div className="p-6">

                <div className="flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {product.rating} Rating
                </p>

                <h3 className="mt-3 text-xl font-black">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between">

                  <p className="text-2xl font-black text-blue-600">
                    ${product.price}
                  </p>

                  <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700">
                    <FaShoppingCart />
                    Add
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <h2 className="text-3xl font-black">
              No Products Found
            </h2>
            <p className="mt-3 text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}

      </main>

      {/* CTA */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-16 text-center text-white">

          <h2 className="text-4xl font-black sm:text-5xl">
            Find Your Perfect Product
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Quality products, modern style and a better shopping experience.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
          >
            Contact Us
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

export default ProductPage;