import { PhoneCall, Navigation } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-brand-light-gray shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex items-center justify-around h-20 px-2 pb-safe">
      <a 
        href="tel:+14155550198" 
        className="flex flex-col items-center justify-center flex-1 h-full font-semibold text-brand-blue"
      >
        <PhoneCall className="h-6 w-6 mb-1" />
        <span className="text-sm">Call Now</span>
      </a>
      
      <div className="w-[1px] h-10 bg-brand-light-gray"></div>
      
      <a 
        href="https://maps.google.com/?q=4900+California+St,+San+Francisco,+CA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 h-full font-semibold text-brand-green"
      >
        <Navigation className="h-6 w-6 mb-1" />
        <span className="text-sm">Directions</span>
      </a>
    </div>
  );
}
