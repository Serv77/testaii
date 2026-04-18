import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Clock, ShieldCheck, HeartPulse, ArrowRight, Star, HeartHandshake } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Designed for high conversion & psychological safety */}
      <section className="relative overflow-hidden bg-brand-light-blue pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl z-10">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-orange/10 text-brand-blue font-bold text-[13px] uppercase tracking-wide">
                No Insurance Required
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-orange/10 text-brand-blue font-bold text-[13px] uppercase tracking-wide">
                100% Confidential
              </div>
            </div>
            <h1 className="font-serif text-[48px] md:text-[56px] font-bold tracking-tight text-brand-blue mb-5 leading-[1.1]">
              Quality care for you. <br/>No insurance needed.
            </h1>
            <p className="text-[18px] text-brand-gray mb-8 leading-[1.6] max-w-lg">
              We provide free primary medical care for uninsured people in the San Francisco area. Walk-ins are welcome on a first-come, first-served basis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                <a href="https://maps.google.com/?q=4900+California+St,+San+Francisco,+CA" target="_blank" rel="noopener noreferrer">
                  Get Directions Now
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-brand-gray">
              <div className="flex -space-x-2">
                 {/* Simulated patient avatars for trust */}
                <div className="w-8 h-8 rounded-full bg-brand-light-gray flex justify-center items-center font-bold text-gray-500 border-2 border-white text-xs">A</div>
                <div className="w-8 h-8 rounded-full justify-center items-center font-bold border-2 border-white bg-blue-100 text-blue-600 flex text-xs">J</div>
                <div className="w-8 h-8 rounded-full justify-center items-center font-bold border-2 border-white bg-green-100 text-green-600 flex text-xs">S</div>
              </div>
              <p>Trusted by thousands of SF residents.</p>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="bg-white rounded-2xl border border-brand-light-gray p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="inline-flex items-center gap-3 text-brand-green font-bold text-[14px] uppercase mb-8">
                <div className="w-2.5 h-2.5 bg-brand-green rounded-full"></div>
                Open Now — Accepting Walk-ins
              </div>
              
              <div className="grid gap-4 mb-8">
                <div className="flex justify-between items-center text-[15px] border-b border-dashed border-brand-light-gray pb-3">
                  <span className="text-brand-gray">Monday – Friday</span>
                  <strong className="text-brand-dark">9:00 AM – 5:00 PM</strong>
                </div>
                <div className="flex justify-between items-center text-[15px] border-b border-dashed border-brand-light-gray pb-3">
                  <span className="text-brand-gray">Saturday</span>
                  <strong className="text-brand-dark">Closed</strong>
                </div>
                <div className="flex justify-between items-center text-[15px] border-b border-dashed border-brand-light-gray pb-3">
                  <span className="text-brand-gray">Sunday</span>
                  <strong className="text-brand-dark">Closed</strong>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-light-gray">
                <h3 className="font-sans text-[16px] font-bold text-brand-dark mb-2">Location</h3>
                <p className="text-[14px] text-brand-gray leading-[1.4]">
                  4900 California Street<br/>
                  San Francisco, CA 94118
                </p>
                <p className="text-[14px] text-brand-gray italic mt-3">
                  Entrance on the corner of 11th Ave
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reassurance Bar */}
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-4 flex flex-col items-center">
            <ShieldCheck className="h-10 w-10 mb-4 text-brand-light-blue" />
            <h3 className="text-xl font-bold mb-2">No Insurance Needed</h3>
            <p className="text-white/80">We never ask for your insurance, and care is always 100% free.</p>
          </div>
          <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-4 flex flex-col items-center">
            <HeartHandshake className="h-10 w-10 mb-4 text-brand-light-blue" />
            <h3 className="text-xl font-bold mb-2">Confidential & Safe</h3>
            <p className="text-white/80">Your health is private. You will be treated with absolute respect.</p>
          </div>
          <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-4 flex flex-col items-center">
            <Clock className="h-10 w-10 mb-4 text-brand-light-blue" />
            <h3 className="text-xl font-bold mb-2">Walk-ins Welcome</h3>
            <p className="text-white/80">No appointments necessary. First-come, first-served care.</p>
          </div>
        </div>
      </section>

      {/* Social Proof / VOC Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-[40px] font-bold text-brand-blue mb-4">You are in good hands.</h2>
            <p className="text-[18px] text-brand-gray max-w-2xl mx-auto">
              We know visiting a clinic can feel stressful. Here is what other patients have experienced.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border text-center border-brand-light-gray p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-6 text-[#FFB800] text-[20px] tracking-widest">
                ★★★★★
              </div>
              <p className="text-brand-gray font-serif text-[18px] italic mb-6 leading-relaxed">
                "They treated me with so much respect. I was nervous because I didn't have insurance, but they made me feel safe and cared for immediately."
              </p>
              <p className="font-bold text-brand-dark text-sm">— Maria G., Richmond District</p>
            </div>
            
            <div className="bg-white border text-center border-brand-light-gray p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-6 text-[#FFB800] text-[20px] tracking-widest">
                ★★★★★
              </div>
              <p className="text-brand-gray font-serif text-[18px] italic mb-6 leading-relaxed">
                "The wait was a bit long because they are busy, but the doctor spent 30 minutes with me. I felt listened to for the first time in years. Exceptional care."
              </p>
              <p className="font-bold text-brand-dark text-sm">— James T.</p>
            </div>

            <div className="bg-white border text-center border-brand-light-gray p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-6 text-[#FFB800] text-[20px] tracking-widest">
                ★★★★★
              </div>
              <p className="text-brand-gray font-serif text-[18px] italic mb-6 leading-relaxed">
                "Honestly, cleaner and more professional than places I've paid hundreds of dollars for. They treat you with dignity regardless of your background."
              </p>
              <p className="font-bold text-brand-dark text-sm">— Sarah W.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-brand-light-orange py-20 border-y border-brand-light-gray">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-[40px] font-bold text-brand-blue mb-6">Ready to see a doctor?</h2>
          <p className="text-[18px] text-brand-gray mb-10 max-w-2xl mx-auto">
            Review our pre-visit guide to know exactly what to expect, reduce your wait time, and ensure you have a smooth experience.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link to="/before-you-visit">Read the Before You Visit Guide</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
