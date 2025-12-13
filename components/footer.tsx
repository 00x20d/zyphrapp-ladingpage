import Image from "next/image";

export default function Footer() {
  return (
    <footer className='border-t border-white/10 bg-[#050406] py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          <div>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-12 h-12 bg-transparent rounded-lg '>
                <Image
                  src='/zyphr_app_logo.png'
                  alt='Zyphr Logo'
                  width={64}
                  height={64}
                />
              </div>
              <span className='font-display font-bold text-xl text-white'>
                Zyphr
              </span>
            </div>
            <p className='text-sm text-white/60 leading-relaxed'>
              Transform your daily habits into a role-playing game. Level up
              your character, unlock achievements, and become the best version
              of yourself.
            </p>
          </div>

          <div>
            <h3 className='font-display font-semibold mb-6 text-sm text-white uppercase tracking-wider'>
              Product
            </h3>
            <ul className='space-y-4 text-sm text-white/60'>
              <li>
                <a
                  href='#'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href='#'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Roadmap
                </a>
              </li> */}
              {/* <li>
                <a
                  href='#'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Pricing
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className='font-display font-semibold mb-6 text-sm text-white uppercase tracking-wider'>
              Company
            </h3>
            <ul className='space-y-4 text-sm text-white/60'>
              <li>
                <a
                  href='#'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href='#'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a
                  href='#'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Careers
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className='font-display font-semibold mb-6 text-sm text-white uppercase tracking-wider'>
              Legal
            </h3>
            <ul className='space-y-4 text-sm text-white/60'>
              <li>
                <a
                  href='/privacy-policy'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='/terms-of-service'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='mailto:support@zyphr.app'
                  className='hover:text-[#701dff] transition-colors duration-200'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/40'>
          <p>&copy; 2025 Zyphr. All rights reserved.</p>
          <div className='flex gap-8 mt-6 sm:mt-0'>
            <a
              href='#'
              className='hover:text-white transition-colors duration-200'
            >
              Twitter
            </a>
            <a
              href='https://discord.com/invite/EAPaQFR4gK'
              target='_blank'
              className='hover:text-white transition-colors duration-200'
            >
              Discord
            </a>
            <a
              href='#'
              className='hover:text-white transition-colors duration-200'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
