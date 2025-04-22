import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2258] text-white px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">InnoSphere</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              We help organizations create impactful solutions aligned to their
              purpose through optimized, focused strategies.
            </p>
            <div className="flex space-x-2">
              {/* Social Links with proper SVG paths */}
              {[
                {
                  href: "https://www.linkedin.com/in/innosphere-digital-5b07b3360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  label: "LinkedIn",
                  color: "#0077B5",
                  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  href: "https://www.instagram.com/inno_sphere.digital?igsh=MWF2b2k2ZHNpZnpraA==",
                  label: "Instagram",
                  color: "#E4405F",
                  d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },

                {
                  href: "https://x.com/innosphere_dx?t=g9Zmzb_p-idFrM6C2aqWBg&s=08",
                  label: "Twitter",
                  color: "#1DA1F2",
                  d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.052 10.052 0 01-3.127 1.184c-.9-.958-2.184-1.559-3.594-1.559-2.72 0-4.92 2.21-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.113-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.016-.627a10.065 10.065 0 002.487-2.543z",
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                  className="bg-white p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: icon.color }}
                  >
                    <path d={icon.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Digital Strategy</li>
              <li>Branding & Identity</li>
              <li>Tech Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300 mb-2">
              bassi pathana , F.G.S , Punjab
            </p>
            <p className="text-sm text-gray-300 mb-2">
              Email: innosphere.digital44@gmail.com
            </p>
            <p className="text-sm text-gray-300">Phone: 7889130942</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} InnoSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
