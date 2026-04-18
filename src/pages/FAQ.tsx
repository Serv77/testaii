import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion";
import { Copy, MapPin, Search } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "Is it really free?",
      a: "Yes. Absolutely everything we do at the clinic is free of charge. We will never ask you for a copay, a fee, or a donation for our medical services."
    },
    {
      q: "Do I need to show proof of citizenship or immigration status?",
      a: "No. Your health is our only concern. We do not ask about, record, or report your immigration status. You are safe here."
    },
    {
      q: "What if I have Medicaid (Medi-Cal) or other insurance?",
      a: "If you have any form of health insurance, including Medi-Cal, we legally cannot treat you, as our funding is strictly reserved for the uninsured. Please call 211 to find a doctor who accepts your insurance."
    },
    {
      q: "Can I make an appointment?",
      a: "We currently operate purely on a walk-in, first-come, first-served basis. We do not take appointments over the phone or online."
    },
    {
      q: "How early should I arrive?",
      a: "Our doors open at 8:00 AM. Because we can only see a certain number of patients per day, we highly recommend arriving exactly at or slightly before 8:00 AM to ensure you are seen."
    },
    {
      q: "Do I need to bring an ID?",
      a: "While a photo ID is helpful for our medical records to ensure we are tracking your health correctly, we will NEVER turn you away if you do not have an ID."
    },
    {
      q: "Do you have doctors who speak Spanish?",
      a: "Yes, many of our staff and volunteer doctors speak Spanish (Hablamos Español). If a Spanish speaker is not available, we use a commercial medical translation service to ensure you understand everything about your care."
    }
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Header */}
      <section className="bg-brand-light-blue py-16 border-b border-brand-light-gray">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-serif text-[48px] md:text-[56px] font-bold tracking-tight text-brand-blue mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-[18px] text-brand-gray">
            Honest, clear answers to help you feel confident before your visit.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg leading-relaxed text-brand-gray/90 bg-brand-light-blue/20 p-4 rounded-lg mt-2">
                    {faq.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#F8F9F5] border-y border-brand-light-gray">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-brand-light-gray">
            <div className="w-full md:w-1/2">
               <h3 className="font-serif text-[32px] font-bold text-brand-blue mb-4 drop-shadow-sm flex items-center gap-2">
                 <MapPin className="text-brand-blue" /> Find Us Here
               </h3>
               <p className="text-[18px] text-brand-gray mb-6">
                 San Francisco Free Clinic<br/>
                 <strong className="text-brand-dark">4900 California St.<br/>
                 San Francisco, CA 94118</strong>
               </p>
               <a 
                 href="https://maps.google.com/?q=4900+California+St,+San+Francisco,+CA" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 font-bold uppercase tracking-[0.05em] text-white text-[16px] px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(27,67,50,0.3)] transition-colors"
               >
                 Open in Google Maps
               </a>
            </div>
            <div className="w-full md:w-1/2 bg-gray-200 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center border border-gray-300">
               {/* Embed google map iframe here, using a static image placeholder for safety if iframe is blocked, or actual iframe */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.250493033503!2d-122.47271968468213!3d37.78415717975765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587114b301c23%3A0xe5aef06478be3271!2s4900%20California%20St%2C%20San%20Francisco%2C%20CA%2094118!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
