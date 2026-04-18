import { Link, useLocation } from "react-router-dom";
import { Menu, MapPin, Phone, Clock, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Before You Visit", path: "/before-you-visit" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-brand-light-gray shadow-sm">
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-blue text-white py-2 px-[40px] text-[13px] font-medium tracking-[0.02em]">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 4900 California St, San Francisco, CA</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Walk-ins: Mon-Fri 8am-4pm</span>
          </div>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (415) 555-0198</span>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-sans text-xl leading-none font-bold">+</div>
          <div className="flex flex-col">
            <span className="font-serif text-[20px] font-bold text-brand-blue">
              San Francisco Free Clinic
            </span>
            <span className="text-[12px] uppercase tracking-wider font-semibold text-brand-green hidden md:block">
              Free Care For Everyone
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[14px] font-semibold uppercase tracking-[0.05em] transition-colors hover:text-brand-blue ${
                location.pathname === link.path ? "text-brand-blue border-b-2 border-brand-blue pb-1" : "text-brand-gray"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="accent">
            <Link to="/before-you-visit">Plan Your Visit</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-brand-light-gray p-4 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-brand-dark py-2 border-b border-brand-light-gray last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="accent" className="w-full mt-2">
            <Link to="/before-you-visit" onClick={() => setIsOpen(false)}>Plan Your Visit</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
