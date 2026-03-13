"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/10 bg-[#050406]/80 backdrop-blur-md'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2.5'>
          <div className='w-10 h-10 bg-transparent rounded-lg flex items-center justify-center '>
            <Image
              src='/zyphr_app_logo.png'
              alt='Zyphr Logo'
              width={48}
              height={48}
            />
          </div>
          <span className='text-lg font-display font-bold tracking-tight'>
            Zyphr
          </span>
        </Link>
        <div className='hidden md:flex items-center gap-8'>
          <Link
            href={isHome ? "#features" : "/#features"}
            onClick={(e) => isHome && scrollToSection(e, "features")}
            className='text-sm font-medium text-white/60 hover:text-white transition-colors duration-200'
          >
            Features
          </Link>
          <Link
            href={isHome ? "#transform" : "/#transform"}
            onClick={(e) => isHome && scrollToSection(e, "transform")}
            className='text-sm font-medium text-white/60 hover:text-white transition-colors duration-200'
          >
            Journey
          </Link>
          <Link
            href={isHome ? "#hero" : "/#hero"}
            onClick={(e) => isHome && scrollToSection(e, "hero")}
            className='text-sm font-medium text-white/60 hover:text-white transition-colors duration-200'
          >
            Waitlist
          </Link>
        </div>
        <Button
          size='sm'
          asChild
          className='bg-[#701dff] hover:bg-[#701dff]/90 text-white font-medium rounded-full px-6 shadow-[0_0_20px_-5px_#701dff] lg:py-5'
        >
          <a
            href='https://app.youform.com/forms/do22x9gt'
            target='_blank'
            rel='noopener noreferrer'
          >
            Join iOS Beta
          </a>
        </Button>
      </div>
    </nav>
  );
}
