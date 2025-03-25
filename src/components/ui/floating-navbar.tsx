'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaGithub,
  FaSteam,
} from 'react-icons/fa';

interface NavItem {
  link: string;
  name: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (typeof current === 'number') {
      let previous = scrollY.getPrevious();
      let direction = previous !== undefined ? current - previous : 0;

      if (current < 10) {
        setVisible(false);
        setAtTop(true);
      } else {
        setAtTop(false);
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      {/* Floating Nav */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -80 }}
          animate={{
            y: visible || atTop ? 0 : -80,
            opacity: visible || atTop ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={cn(
            'fixed top-4 left-0 right-0 mx-auto dark:bg-black bg-white shadow-lg z-[100] flex items-center justify-between px-6 py-4',
            atTop
              ? 'w-full rounded-none'
              : 'w-max rounded-full border dark:border-white/[0.2] px-6 py-2',
            className
          )}
        >
          {/* Hamburger Icon */}
          <button
            className="block lg:hidden text-gray-600 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex flex-1 items-center justify-between">
            {atTop && (
              <div className="text-xl font-bold">
                Muhamad Erzie Aldrian Nugraha
              </div>
            )}
            <div className="flex space-x-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="text-neutral-600 dark:text-neutral-50 hover:text-neutral-500"
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
            {atTop && (
              <div className="flex space-x-4">
                <Link href="#">
                  <FaDiscord size={20} />
                </Link>
                <Link href="#">
                  <FaInstagram size={20} />
                </Link>
                <Link href="#">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#">
                  <FaLinkedin size={20} />
                </Link>
                <Link href="#">
                  <FaGithub size={20} />
                </Link>
                <Link href="#">
                  <FaSteam size={20} />
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-white dark:bg-black shadow-lg p-6 flex flex-col items-center space-y-4 z-[99]"
          >
            <div className="text-xl font-bold">
              Muhamad Erzie Aldrian Nugraha
            </div>
            <div className="flex space-x-4">
              <Link href="#">
                <FaDiscord size={20} />
              </Link>
              <Link href="#">
                <FaInstagram size={20} />
              </Link>
              <Link href="#">
                <FaFacebook size={20} />
              </Link>
              <Link href="#">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#">
                <FaGithub size={20} />
              </Link>
              <Link href="#">
                <FaSteam size={20} />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="text-neutral-600 dark:text-neutral-50 hover:text-neutral-500"
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
