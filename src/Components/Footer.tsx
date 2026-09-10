import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#eef1f4] bg-white">
      <div className="mx-auto max-w-[90%] py-10 sm:py-12 text-center">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Block */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-8 w-auto object-contain"
            />

            <p className="mt-4 max-w-77.5 text-[15px] leading-[1.6] text-[#718096]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center justify-center gap-4">
              <a
                href="https://github.com/yousufali01"
                className="text-[15px] text-[#334155] transition hover:text-[#e62e7b]"
              >
                GitHub
              </a>

              <span className="text-[15px] text-[#94a3b8]">•</span>

              <a
                href="https://communitynotes.x.com/guide/en/contributing/signing-up"
                className="text-[15px] text-[#334155] transition hover:text-[#e62e7b]"
              >
                Twitter
              </a>

              <span className="text-[15px] text-[#94a3b8]">•</span>

              <a
                href="https://www.linkedin.com/in/md-yousuf-ali-b8a7332a1/"
                className="text-[15px] text-[#334155] transition hover:text-[#e62e7b]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden lg:block">
            <h3 className="text-[15px] font-bold tracking-wide text-[#111827]">
              PRODUCT
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="hidden lg:block">
            <h3 className="text-[15px] font-bold tracking-wide text-[#111827]">
              COMPANY
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="hidden lg:block">
            <h3 className="text-[15px] font-bold tracking-wide text-[#111827]">
              LEGAL
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-[15px] text-[#718096] transition hover:text-[#111827]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#eef1f4] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between text-center items-center">
          <p className="text-[15px] text-[#94a3b8]">
            © 2026 Dev Stack. All rights reserved | Developer Md. Yousuf Ali.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-[15px] text-[#94a3b8] transition hover:text-[#111827]"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-[15px] text-[#94a3b8] transition hover:text-[#111827]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
