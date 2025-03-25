'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Link from 'next/link';
import { Boxes } from '@/components/ui/background-boxes';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import CircularText from '@/components/ui/circular-text';
import { FloatingDock } from '@/components/ui/floating-dock';
import { Button } from '@/components/ui/moving-border';
import { SparklesCore } from '@/components/ui/sparkles';
import DecryptedText from '@/components/ui/decrypt-text';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/ui/animated-modal';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const products = [
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    },
    {
      title: 'Editrix AI',
      link: 'https://editrix.ai',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    },
    {
      title: 'Pixel Perfect',
      link: 'https://app.pixelperfect.quest',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    },

    {
      title: 'Algochurn',
      link: 'https://algochurn.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
    },
    {
      title: 'Aceternity UI',
      link: 'https://ui.aceternity.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
    },
    {
      title: 'Tailwind Master Kit',
      link: 'https://tailwindmasterkit.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    },
    {
      title: 'SmartBridge',
      link: 'https://smartbridgetech.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    },
    {
      title: 'Renderwork Studio',
      link: 'https://renderwork.studio',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    },

    {
      title: 'Creme Digital',
      link: 'https://cremedigital.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://goldenbellsacademy.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://invoker.lol',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/invoker.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://efreeinvoice.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
    },
  ];

  const words = [
    {
      text: 'Fullstack Developer',
      className: 'text-1xl md:text-3xl text-black dark:text-white',
    },
    {
      text: 'UI/UX Designer',
      className: 'text-1xl md:text-3xl text-black dark:text-white',
    },
    {
      text: 'Back-end Developer',
      className: 'text-1xl md:text-3xl text-black dark:text-white',
    },
    {
      text: 'Front-end Developer',
      className: 'text-1xl md:text-3xl text-black dark:text-white',
    },
  ];

  const testimonials = [
    {
      src: '/svg/html-5-svgrepo-com.svg',
      alt: 'HTML',
      name: 'HTML',
      quote: 'Markup language for creating web pages.',
      title: 'Web Technology',
    },
    {
      src: '/svg/css-3-svgrepo-com.svg',
      alt: 'CSS',
      name: 'CSS',
      quote: 'Style sheet language for designing web pages.',
      title: 'Web Technology',
    },
    {
      src: '/svg/php-svgrepo-com.svg',
      alt: 'PHP',
      name: 'PHP',
      quote: 'Server-side scripting language.',
      title: 'Programming Language',
    },
    {
      src: '/svg/laravel-svgrepo-com.svg',
      alt: 'Laravel',
      name: 'Laravel',
      quote: 'PHP framework for web artisans.',
      title: 'Framework',
    },
    {
      src: '/svg/bootstrap-4-logo-svgrepo-com.svg',
      alt: 'Bootstrap',
      name: 'Bootstrap',
      quote: 'CSS framework for responsive design.',
      title: 'Framework',
    },
    {
      src: '/svg/git-svgrepo-com.svg',
      alt: 'Git',
      name: 'Git',
      quote: 'Version control system.',
      title: 'Tool',
    },
    {
      src: '/svg/github-142-svgrepo-com.svg',
      alt: 'Github',
      name: 'Github',
      quote: 'Platform for version control and collaboration.',
      title: 'Platform',
    },
    {
      src: '/svg/javascript-svgrepo-com.svg',
      alt: 'Javascript',
      name: 'Javascript',
      quote: 'Programming language for web development.',
      title: 'Programming Language',
    },
    {
      src: '/svg/laragon-svgrepo-com.svg',
      alt: 'Laragon',
      name: 'Laragon',
      quote:
        'Portable, isolated, fast & powerful universal development environment.',
      title: 'Tool',
    },
    {
      src: '/svg/mysql-logo-svgrepo-com.svg',
      alt: 'MySQL',
      name: 'MySQL',
      quote: 'Relational database management system.',
      title: 'Database',
    },
    {
      src: '/svg/linux-svgrepo-com.svg',
      alt: 'Linux',
      name: 'Linux',
      quote: 'Open-source operating system.',
      title: 'Operating System',
    },
    {
      src: '/svg/python-svgrepo-com.svg',
      alt: 'Python',
      name: 'Python',
      quote: 'High-level programming language.',
      title: 'Programming Language',
    },
    {
      src: '/svg/tailwind-svgrepo-com.svg',
      alt: 'Tailwind',
      name: 'Tailwind',
      quote: 'Utility-first CSS framework.',
      title: 'Framework',
    },
    {
      src: '/svg/vscode-svgrepo-com.svg',
      alt: 'VSCode',
      name: 'VSCode',
      quote: 'Source-code editor.',
      title: 'Tool',
    },
  ];

  const images = [
    'https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Products',
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Aceternity UI',
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Twitter',
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-[200vh] py-2">
      <FloatingNav navItems={navItems} />

      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-white dark:bg-black mt-20">
        <div className="container" id="home">
          <div className="flex flex-wrap">
            {/* Left Section */}
            <div className="w-full px-4 self-center lg:w-1/2">
              <h1 className="text-base font-semibold text-primaryLight dark:text-blue md:text-xl">
                <span className="block md:hidden mt-1 text-center md:text-left text-2xl md:text-4xl font-boldlg:text-[40px]">
                  Muhamad Erzie Aldrian Nugraha
                </span>
              </h1>
              <TypewriterEffect words={words} />
              <DecryptedText
                text="aaaaaaaaaaaaaaaaaaaaa"
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="reload"
              />
              <p className="max-w-xl mb-10 text-base font-medium text-justify text-secondary dark:text-slate-400 lg:text-lg">
                Saya adalah lulusan baru dari{' '}
                <b className="text-dark dark:text-slate-200">
                  Universitas Indraprasta PGRI{' '}
                </b>
                dengan gelar di
                <b className="text-dark dark:text-slate-200">
                  {' '}
                  Teknik Informatika
                </b>
                , dengan pengalaman sebagai
                <b className="text-dark dark:text-slate-200"> Front-End </b>,
                <b className="text-dark dark:text-slate-200"> Back-End </b>, dan
                <b className="text-dark dark:text-slate-200">
                  Fullstack Developer
                </b>
                , serta
                <b className="text-dark dark:text-slate-200"> UI/UX Designer</b>
                . Saya aktif dalam kegiatan ekstrakurikuler dan ingin terhubung
                dengan profesional di industri.
              </p>
              <Link href="/">
                <Button
                  borderRadius="2.75rem"
                  className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 justify-center"
                >
                  Download CV
                </Button>
              </Link>
              {/* <Link
                href="/some-page"
                className="px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out bg-primaryLight rounded-full dark:bg-blue hover:bg-slate-600 hover:opacity-80 hover:shadow-lg"
              >
                <span className="mr-2">Download CV</span>
              </Link> */}
            </div>

            {/* Right Section */}
            <div className="w-full px-4 self-end lg:w-1/2">
              <div className="relative mt-10 mb-10 lg:mt-9 lg:right-0">
                <Image
                  src="/images/profiles/me_ilustration.png"
                  alt="Thats Me"
                  width={400}
                  height={200}
                  className="relative z-10 max-w-full h-[420px] mx-auto"
                />
                <span className="absolute left-1/2 top-[1.5px] -translate-x-1/2 md:scale-125">
                  <CircularText
                    text="11000*11*11111010010"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                  />
                </span>
              </div>
              {/* <div className="flex items-center justify-center">
                <FloatingDock mobileClassName="translate-y-20" items={links} />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center mt-2">
        <h1 className="md:text-5xl text-md font-bold text-center text-white relative z-20">
          Some of My Skills
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="h-full -mt-20 z-30"
        />
      </div>

      <Modal>
        <ModalTrigger className="mt-10 px-6 py-3 bg-black dark:bg-white dark:text-black text-white rounded-lg shadow-md hover:bg-gray-800 transition">
          Open Gallery
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              ))}
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
      <HeroParallax products={products} />
      {/* <Navbar className="bg-white shadow-lg rounded-lg" /> */}
      <h1 className="text-3xl text-orange-600 font-bold underline">
        Hello world!
      </h1>
    </main>
  );
}
