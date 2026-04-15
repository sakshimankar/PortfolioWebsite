import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth
          offset={-80}
          className="cursor-pointer font-display font-bold text-xl tracking-tight"
        >
          <span className="text-gradient">SM</span>
          <span className="text-foreground/60 font-light ml-1 text-base hidden sm:inline">
            / Portfolio
          </span>
        </ScrollLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth
                offset={-80}
                spy
                activeClass="text-primary"
                className="cursor-pointer px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={resumeData.personal.resumeUrl}
          download
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border px-4 pb-6 pt-2">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="block cursor-pointer px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <a
            href={resumeData.personal.resumeUrl}
            download
            className="mt-4 flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
