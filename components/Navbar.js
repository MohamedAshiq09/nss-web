'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[11vh] bg-white bg-opacity-80 backdrop-blur-lg shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          {/* Logo Positioned at the Left Corner */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition flex items-center">
              <Image
                src="/logo.png" // Replace with your furniture shop logo
                alt="Furniture Shop Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation Centered */}
          <nav className="hidden md:flex space-x-8 ml-28">
            <div
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center"
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition duration-300 text-lg relative"
              >
                Home
              </Link>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center"
            >
              <Link
                href="/shop"
                className="text-gray-700 hover:text-gray-900 transition duration-300 text-lg relative"
              >
                Shop
              </Link>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center"
            >
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition duration-300 text-lg relative"
              >
                About
              </Link>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center"
            >
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition duration-300 text-lg relative"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Right Corner with DynamicWidget (optional) */}
          <div className="hidden md:flex items-center space-x-4">
            <DynamicWidget />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none transition"
            >
              {isOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Fixed Gradient Line */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          initial={{ x: '-100%' }}
          animate={{
            x:
              hoveredLink === 'home'
                ? '-25%'
                : hoveredLink === 'shop'
                ? '0%'
                : hoveredLink === 'about'
                ? '25%'
                : hoveredLink === 'contact'
                ? '50%'
                : '0%',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="text-gray-900 text-3xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-900 text-3xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-900 text-3xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 text-3xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            {/* Dynamic Widget (optional) visible only in mobile */}
            <div className="mt-8">
              <DynamicWidget />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}