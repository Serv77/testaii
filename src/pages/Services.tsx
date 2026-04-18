import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

export function Services() {
  return (
    <div className="w-full bg-white">
      <section className="bg-brand-light-blue py-16 md:py-24 border-b border-brand-light-gray">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-[48px] md:text-[56px] font-bold tracking-tight text-brand-blue mb-6">
            Our Services
          </h1>
          <p className="text-[18px] text-brand-gray max-w-2xl mx-auto leading-relaxed">
            We offer primary medical care to those who need it most. Because we are a free clinic, our resources are limited, but our commitment to your health is unbounded.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-12">
          
          {/* Services Provided */}
          <div className="bg-white border flex flex-col border-brand-light-gray shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
            <div className="bg-brand-light-blue p-6 border-b border-brand-light-gray">
              <h2 className="font-serif text-[28px] font-bold text-brand-blue flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7" /> What We Treat
              </h2>
            </div>
            <div className="p-6 md:p-8 flex-1">
              <p className="text-brand-gray mb-6 text-lg">We provide general primary care for adults and children.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Acute Illnesses <span className="block text-sm text-brand-gray font-normal">Colds, flu, infections, minor injuries.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Chronic Diseases <span className="block text-sm text-brand-gray font-normal">Management for diabetes, high blood pressure, asthma.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Preventative Care <span className="block text-sm text-brand-gray font-normal">Vaccinations, basic physical exams.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Basic Lab Work <span className="block text-sm text-brand-gray font-normal">Essential blood tests and screenings.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Medications <span className="block text-sm text-brand-gray font-normal">We can prescribe basic generic medications (often provided free or low-cost through partners).</span></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services NOT Provided */}
          <div className="bg-white border flex flex-col border-brand-light-gray shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
            <div className="bg-red-50 p-6 border-b border-red-100">
              <h2 className="font-serif text-[28px] font-bold text-red-700 flex items-center gap-3">
                <XCircle className="h-7 w-7" /> What We Cannot Treat
              </h2>
            </div>
            <div className="p-6 md:p-8 flex-1">
              <p className="text-brand-gray mb-6 text-lg">We are not an emergency room or a specialized hospital.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Emergencies <span className="block text-sm text-brand-gray font-normal">If you have chest pain, severe bleeding, or difficulty breathing, call 911 immediately.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Surgical Procedures <span className="block text-sm text-brand-gray font-normal">We do not perform surgeries of any kind.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Dental & Vision <span className="block text-sm text-brand-gray font-normal">We do not have dentists or eye doctors on staff.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Complex Mental Health <span className="block text-sm text-brand-gray font-normal">While we offer basic support, we cannot treat severe psychiatric conditions or provide long-term therapy.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                  <span className="text-lg text-brand-dark font-medium">Controlled Substances <span className="block text-sm text-brand-gray font-normal">We do not prescribe narcotics, medical marijuana, or other strongly controlled medications.</span></span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="container mx-auto max-w-4xl px-4 mt-16 text-center">
            <h3 className="font-serif text-[32px] font-bold text-brand-blue mb-4">Not sure if we can help?</h3>
            <p className="text-[18px] text-brand-gray mb-8">
              It is always best to simply walk in and speak with our triage team. Even if we cannot treat you directly, we will do our best to refer you to a community partner who can.
            </p>
            <Button asChild size="lg" variant="default" className="shadow-[0_4px_14px_rgba(27,67,50,0.3)]">
              <Link to="/before-you-visit">Prepare For Your Visit</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
