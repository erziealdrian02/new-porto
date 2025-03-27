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
import ScrollVelocity from '@/components/ui/scroll-velocity';
import { Button } from '@/components/ui/moving-border';
import { SparklesCore } from '@/components/ui/sparkles';
import DecryptedText from '@/components/ui/decrypt-text';
import { motion } from 'motion/react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { LampContainer } from '@/components/ui/lamp';
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

  const [velocity, setVelocity] = useState(1); // Default value for velocity

  return (
    <main className="flex flex-col items-center justify-center min-h-[200vh] py-2">
      <FloatingNav navItems={navItems} />

      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-white dark:bg-black mt-32 mb-48">
        {/* <Boxes /> */}
        <div className="container" id="home">
          <div className="flex flex-wrap">
            {/* Left Section */}
            <div className="w-full px-4 self-center lg:w-1/2">
              <h1 className="text-base font-semibold text-black dark:text-white md:text-xl">
                <span className="block md:hidden mt-1 text-center md:text-left text-2xl md:text-4xl font-boldlg:text-[40px]">
                  Muhamad Erzie Aldrian Nugraha
                </span>
              </h1>
              <TypewriterEffect words={words} />
              <div className="md:hidden w-full px-4 self-end lg:w-1/2 flex justify-center relative">
                {/* Lingkaran Teks */}
                <span className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center pointer-events-none">
                  <CircularText
                    text="11000*11*11111010010"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                  />
                </span>

                {/* Card dengan animasi 3D */}
                <CardContainer className="inter-var z-10">
                  <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-full flex items-center justify-center border-none bg-transparent ">
                    {/* Gambar dalam Card */}
                    <CardItem
                      translateZ={100}
                      className="w-[240px] sm:w-[250px] md:w-[300px] h-[240px] sm:h-[250px] md:h-[300px] rounded-full overflow-hidden -mt-10 flex justify-center"
                    >
                      <Image
                        src="/images/profiles/me_ilustration.png"
                        alt="Thats Me"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              <p className="max-w-xl mb-10 text-base font-medium text-justify text-secondary dark:text-slate-400 lg:text-lg">
                <DecryptedText
                  text="Saya adalah lulusan baru dari Universitas Indraprasta PGRI dengan"
                  speed={100}
                  maxIterations={20}
                  characters="abcdefg123!@#$%^&*"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  animateOn="view"
                />
                <br />
                <DecryptedText
                  text="gelar di Teknik Informatika, dengan pengalaman sebagai "
                  speed={100}
                  maxIterations={20}
                  characters="abcdefg123!@#$%^&*"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  animateOn="view"
                />
                <b className="text-dark dark:text-slate-200">
                  <DecryptedText
                    text="Front-End"
                    speed={100}
                    maxIterations={20}
                    characters="abcdefg123!@#$%^&*"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="view"
                  />
                </b>
                ,{' '}
                <b className="text-dark dark:text-slate-200">
                  <DecryptedText
                    text="Back-End"
                    speed={100}
                    maxIterations={20}
                    characters="abcdefg123!@#$%^&*"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="view"
                  />
                </b>
                , dan{' '}
                <b className="text-dark dark:text-slate-200">
                  <DecryptedText
                    text="Fullstack Developer"
                    speed={100}
                    maxIterations={20}
                    characters="abcdefg123!@#$%^&*"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="view"
                  />
                </b>
                , serta{' '}
                <b className="text-dark dark:text-slate-200">
                  <DecryptedText
                    text="UI/UX Designer"
                    speed={100}
                    maxIterations={20}
                    characters="abcdefg123!@#$%^&*"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="view"
                  />
                </b>
                . Saya aktif dalam kegiatan ekstrakurikuler dan ingin terhubung
                dengan profesional di industri.
              </p>
              <div className="text-center md:text-left mb-9">
                <a
                  href="/resume/Muhamad Erzie Aldrian Nugraha-resume.pdf"
                  download
                >
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 justify-center"
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex w-full px-4 self-end lg:w-1/2 justify-center">
              <div className="w-full px-4 self-end lg:w-1/2 flex justify-center relative">
                {/* Lingkaran Teks */}
                <span className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center pointer-events-none">
                  <CircularText
                    text="11000*11*11111010010"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                  />
                </span>

                {/* Card dengan animasi 3D */}
                <CardContainer className="inter-var z-10">
                  <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-full flex items-center justify-center border-none bg-transparent ">
                    {/* Gambar dalam Card */}
                    <CardItem
                      translateZ={100}
                      className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] rounded-full overflow-hidden -mt-10 flex justify-center"
                    >
                      <Image
                        src="/images/profiles/me_ilustration.png"
                        alt="Thats Me"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </div>

        <ScrollVelocity
          texts={['', 'Muhamad Erzie Aldrian Nugraha']}
          // velocity={velocity}
          numCopies={10}
          className="custom-scroll-text"
        />
        <ScrollVelocity
          texts={[
            'Back-end Developer Front-end Developer UI/UX Designer Fullstack Developer',
          ]}
          numCopies={10}
        />
      </div>

      <div className="w-full relative overflow-hidden flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute top-16 transform -translate-x-1/2 z-50"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-center text-shadow-neon animate-neonflicker">
            Some of My Skills
          </h1>
        </motion.div>

        <LampContainer className="w-full min-h-screen flex flex-col items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="w-full mt-2 z-40"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              // className="-mt-14"
            />
          </motion.div>
        </LampContainer>
      </div>

      {/* <div className="h-full relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        <h1 className="md:text-5xl text-md font-bold text-center text-white relative z-20">
          Some of My Skills
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="h-full -mt-20 z-30 pointer-events-none"
        />
      </div> */}
      <HeroParallax products={products} />
      {/* <Navbar className="bg-white shadow-lg rounded-lg" /> */}
      <h1 className="text-3xl text-orange-600 font-bold underline">
        Hello world!
      </h1>

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
    </main>
  );
}
