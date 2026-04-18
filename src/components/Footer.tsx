import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-brand-blue font-sans text-xl leading-none font-bold">+</div>
            <h2 className="font-serif text-[28px] font-bold tracking-tight">San Francisco Free Clinic</h2>
          </div>
          <p className="text-white/80 max-w-sm mb-6 text-[16px] leading-[1.6]">
            Providing compassionate, free medical care to uninsured working individuals and their families.
          </p>
          <div className="bg-white/10 p-5 rounded-xl border border-white/10 inline-block">
            <p className="font-sans font-bold uppercase tracking-widest text-brand-orange text-[12px] mb-2">Clinic Hours (Walk-in)</p>
            <p className="text-[15px]">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-[13px] text-white/60 mt-1 italic">First come, first served.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-light-gray">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/before-you-visit" className="hover:text-brand-light-blue transition-colors">Plan Your Visit</Link></li>
            <li><Link to="/services" className="hover:text-brand-light-blue transition-colors">Our Services</Link></li>
            <li><Link to="/faq" className="hover:text-brand-light-blue transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-light-gray">Location</h3>
          <address className="not-italic text-brand-light-gray space-y-2">
            <p>4900 California St.</p>
            <p>San Francisco, CA 94118</p>
            <p className="pt-2 text-white font-medium">Phone: (415) 555-0198</p>
          </address>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center text-sm text-brand-light-gray/60">
        <p>&copy; {new Date().getFullYear()} San Francisco Free Clinic. All rights reserved.</p>
        <p className="mt-2 md:mt-0">If you are experiencing a medical emergency, call 911 immediately.</p>
      </div>
    </footer>
  );
}
