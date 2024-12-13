"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-Accent backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-primary text-3xl font-semibold bg-gray-700 bg-clip-text text-transparent">
              Glenda Karollyne
              <span className="text-rose-500">.</span>
            </h1>
          </div>

          <div className="hidden sm:flex space-x-8">
            <a className="font-primary text-lg relative group">
              <span className="relative z-10 text-gray-700 group-hover:text-rose-500 transition-colors duration-200 cursor-pointer">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-200" />
            </a>

            <a className="font-primary text-lg relative group">
              <span className="relative z-10 text-gray-700 group-hover:text-rose-500 transition-colors duration-200 cursor-pointer">
                Sobre
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-200" />
            </a>

            <a className="font-primary text-lg relative group">
              <span className="relative z-10 text-gray-700 group-hover:text-rose-500 transition-colors duration-200 cursor-pointer">
                Experiências
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-200" />
            </a>
          </div>

          <button className="sm:hidden text-gray-700 hover:text-rose-500 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
