export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 flex flex-col items-start">
            <div className="relative w-16 h-16">
              <img
                src="/logo-white.svg"
                alt="Web Hash Logo"
                width={64}
                height={64}
              />
            </div>
            <p className="text-xl font-light mt-4">
              BUILDING THE DECENTRALISED WEB <br className="hidden md:block" />
              THAT LIVES FOREVER.
            </p>
          </div>

          <div className="flex items-start justify-start md:justify-start gap-20">
            {/*  Links */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-gray-400 font-medium mb-4">Resources</h3>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="https://ens.domains/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    ENS
                  </a>
                </li>
                <li>
                  <a
                    href="https://ipfs.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    IPFS
                  </a>
                </li>
                <li>
                  <a
                    href="https://node-setup.webhash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Node Setup Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://builder.webhash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    WebHash Builder
                  </a>
                </li>
                <li>
                  <a
                    href="https://pro.webhash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    WebHash Pro
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Links */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-gray-400 font-medium mb-4">Follow Us</h3>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="https://x.com/webhash_eth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/webhashdotcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/webhashdotcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/TvHqbyJnNP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@webhash_eth?themeRefresh=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section with Divider */}
        <div className="mt-16 pt-8 border-t border-white/30">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-500 text-sm">
            <a
              href="/terms"
              className="text-white/30 hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/disclaimer"
              className="text-white/30 hover:text-gray-300 transition-colors"
            >
              Disclaimer
            </a>
            <a
              href="/privacy-policy"
              className="text-white/30 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/30">All Rights Reserved © 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
