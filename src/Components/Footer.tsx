import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#eef1f4] bg-white">
      <div className="mx-auto max-w-[90%] py-10 sm:py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Block */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-8 w-auto object-contain"
            />

            <p className="mt-4 max-w-[310px] text-[11] leading-[1.6] text-[#718096]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/yousufali01"
                className="text-[11] text-[#334155] transition hover:text-[#e62e7b]"
              >
                GitHub
              </a>

              <a
                href="https://communitynotes.x.com/guide/en/contributing/signing-up"
                className="text-[11] text-[#334155] transition hover:text-[#e62e7b]"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/in/md-yousuf-ali-b8a7332a1/"
                className="text-[11] text-[#334155] transition hover:text-[#e62e7b]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;