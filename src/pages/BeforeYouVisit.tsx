import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, AlertCircle, FileText, MapPin } from "lucide-react";

export function BeforeYouVisit() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-brand-light-blue py-16 md:py-24 border-b border-brand-light-gray">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-[48px] md:text-[56px] font-bold tracking-tight text-brand-blue mb-6">
            Before You Visit
          </h1>
          <p className="text-[18px] text-brand-gray max-w-2xl mx-auto leading-relaxed">
            We want your visit to be as smooth and stress-free as possible. Here is exactly what to expect when you arrive.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          
          <div className="bg-brand-light-blue border border-brand-blue/20 rounded-2xl p-6 md:p-8 mb-16 flex gap-4 md:gap-6 items-start">
            <div className="bg-white p-3 rounded-full shrink-0 shadow-sm text-brand-blue">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Wait Times Can Be Long</h3>
              <p className="text-brand-gray text-lg leading-relaxed">
                Because we operate on a first-come, first-served basis, wait times can sometimes be <strong>1 to 3 hours</strong>. We highly recommend arriving early in the morning (around 8:00 AM) to secure your spot.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <h2 className="font-serif text-[32px] font-bold text-brand-blue mb-2">1. Who We Treat</h2>
                  <p className="text-[14px] text-brand-gray uppercase tracking-widest font-bold">Clear eligibility criteria.</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-8 rounded-2xl border border-brand-light-gray shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-dark">Uninsured Adults & Children</strong>
                      <span className="text-brand-gray">If you have no health insurance, we are here for you.</span>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-dark">Working Families</strong>
                      <span className="text-brand-gray">Even if you have a job, if you don't have insurance, you qualify.</span>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start pt-4 border-t border-gray-100">
                    <AlertCircle className="h-6 w-6 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-dark">If you DO have insurance (Medi-Cal, Medicare, Private)</strong>
                      <span className="text-brand-gray">We cannot see you. Please contact your insurance provider or call 211 to find an in-network doctor.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <h2 className="font-serif text-[32px] font-bold text-brand-blue mb-2">2. What to Bring</h2>
                  <p className="text-[14px] text-brand-gray uppercase tracking-widest font-bold">Keep it simple.</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-8 rounded-2xl border border-brand-light-gray shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="mb-6 pb-6 border-b border-gray-100 flex gap-4">
                  <FileText className="h-8 w-8 text-brand-blue shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Just bring yourself.</h3>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      While having an ID is helpful for our records, <strong>we will never turn you away for lack of ID.</strong> We do not ask about immigration status.
                    </p>
                  </div>
                </div>
                <div className="bg-brand-light-gray p-4 rounded-xl">
                  <p className="text-sm font-medium text-brand-dark mb-2">Optional but helpful:</p>
                  <ul className="list-disc pl-5 text-sm text-brand-gray space-y-1">
                    <li>Any current medications you are taking (or photos of the bottles)</li>
                    <li>Past medical records if you have them</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <h2 className="font-serif text-[32px] font-bold text-brand-blue mb-2">3. Arrival & Check-in</h2>
                  <p className="text-[14px] text-brand-gray uppercase tracking-widest font-bold">Step-by-step process.</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-8 rounded-2xl border border-brand-light-gray shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="space-y-6 relative border-l-2 border-brand-light-gray ml-3 pl-6">
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0.5 bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <h4 className="font-bold text-brand-dark text-lg">Walk In</h4>
                    <p className="text-brand-gray mt-1">Come to our front desk at 4900 California Street. Our friendly staff will greet you.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0.5 bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <h4 className="font-bold text-brand-dark text-lg">Brief Intake</h4>
                    <p className="text-brand-gray mt-1">We'll ask for your name and a brief description of why you are visiting today to ensure we can help.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0.5 bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <h4 className="font-bold text-brand-dark text-lg">Sit & Wait</h4>
                    <p className="text-brand-gray mt-1">You'll take a seat in our waiting room. We recommend bringing a book or something to listen to.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0.5 bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <h4 className="font-bold text-brand-dark text-lg">See the Doctor</h4>
                    <p className="text-brand-gray mt-1">You'll be called back to a private room for a confidential examination and treatment plan.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-20 pt-16 border-t border-brand-light-gray text-center">
            <h2 className="font-serif text-[40px] font-bold text-brand-blue mb-6">Have more questions?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="outline">
                <Link to="/faq">Read our FAQ</Link>
              </Button>
              <Button asChild size="lg" variant="default">
                <a href="https://maps.google.com/?q=4900+California+St,+San+Francisco,+CA" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" /> Get Directions
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
