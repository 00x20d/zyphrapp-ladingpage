import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-[#050406] text-white flex flex-col'>
      <Navbar />

      <div className='grow pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight'>
              Get in <span className='text-[#701dff]'>Touch</span>
            </h1>
            <p className='text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed'>
              Have questions, feedback, or need support? We&apos;re here to help
              you on your journey to becoming the best version of yourself.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            {/* Contact Information */}
            <div className='space-y-10'>
              <div className='space-y-6'>
                <h2 className='text-2xl font-display font-bold text-white'>
                  Why reach out?
                </h2>
                <div className='space-y-4 text-white/60'>
                  <p className='leading-relaxed'>
                    Whether you&apos;re experiencing technical issues, have
                    feature suggestions, or just want to share your progress,
                    we&apos;d love to hear from you.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <div className='w-1.5 h-1.5 rounded-full bg-[#701dff]' />
                      <span>Technical support and bug reports</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='w-1.5 h-1.5 rounded-full bg-[#701dff]' />
                      <span>Feature requests and improvements</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='w-1.5 h-1.5 rounded-full bg-[#701dff]' />
                      <span>Partnership and business inquiries</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='w-1.5 h-1.5 rounded-full bg-[#701dff]' />
                      <span>General feedback and community stories</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='space-y-6'>
                <h2 className='text-2xl font-display font-bold text-white'>
                  Community
                </h2>
                <p className='text-white/60 leading-relaxed'>
                  Join our Discord community for faster responses and to connect
                  with other Zyphr users.
                </p>
                <a
                  href='https://discord.com/invite/EAPaQFR4gK'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-[#701dff] hover:text-[#701dff]/80 font-medium transition-colors'
                >
                  Join our Discord
                  <svg
                    className='ml-2 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
