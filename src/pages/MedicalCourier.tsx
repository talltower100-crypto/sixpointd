import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Thermometer, ShieldCheck, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MedicalCourier() {
  return (
    <div className="font-sans bg-white text-black selection:bg-primary/10">
      <SEOHead 
        title="Medical Courier Services | Six Point Logistics"
        description="Bloodborne Pathogen Certified medical courier services. Secure, same-day transport for lab samples, medical supplies, and pharmacy deliveries."
        canonical="https://6pointlogistics.com/services/medical-courier"
        ogImage="https://vibe.filesafe.space/1782248913428778838/assets/945bdd1e-9086-49fc-90e6-f46936d8cd12.jpg"
      />
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex flex-col bg-primary">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-primary mix-blend-multiply opacity-80">
          <img 
            src="https://vibe.filesafe.space/1782248913428778838/assets/945bdd1e-9086-49fc-90e6-f46936d8cd12.jpg"
            alt="Medical Courier"
            className="absolute top-1/2 left-1/2 w-full h-full min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
        </div>

        <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 w-full pt-20">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white/90 font-medium text-lg tracking-wide uppercase"
            >
              Medical Ready
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Medical Courier Service - Six Point Logistics
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Safe and fast delivery for lab samples and medical supplies.
            </motion.p>
          </div>
        </main>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-medium tracking-tight">Safe and fast.</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              We have the right training to safely move medical items between labs, hospitals, and clinics.
            </p>
            
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Lab Samples</h3>
                  <p className="text-black/70">We safely move sensitive lab items.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Thermometer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Pharmacy</h3>
                  <p className="text-black/70">Fast delivery for clinics and patients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Same-Day</h3>
                  <p className="text-black/70">We can deliver today or on a set schedule.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
              <h3 className="text-2xl font-medium mb-6">Medical Delivery Rates</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <span className="font-medium">Short Runs</span>
                  <span className="text-primary font-bold">$25 – $75</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <span className="font-medium">Standard Run</span>
                  <span className="text-primary font-bold">$50 – $150</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <span className="font-medium">Consistent Routes</span>
                  <span className="text-primary font-bold">$500 – $2,000 / week</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">High-Volume Routes</span>
                  <span className="text-primary font-bold">Up to $3K / week</span>
                </div>
              </div>
            </div>

            <div className="bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
              <h3 className="text-2xl font-medium mb-6">General Local Delivery</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <span className="font-medium">Local</span>
                  <span className="text-primary font-bold">$50 – $75</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <span className="font-medium">15–50 miles</span>
                  <span className="text-primary font-bold">$75 – $150</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">50+ miles</span>
                  <span className="text-primary font-bold">$150 – $300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <SEOContentBlock 
          title="Reliable Medical Courier Services"
          paragraphs={[
            "When it comes to medical logistics, there is zero margin for error. The safe, timely, and compliant transportation of lab samples, medical supplies, and pharmaceuticals is critical to patient care and operational efficiency. Six Point Logistics provides specialized medical courier services designed to meet the rigorous demands of the healthcare industry across Connecticut, New York, and New Jersey. We are the trusted partner for hospitals, clinics, laboratories, and pharmacies that require secure, rapid delivery solutions.",
            "Our team is fully Bloodborne Pathogen Certified, meaning our drivers are extensively trained in the safe handling, transport, and emergency response procedures for biohazardous materials and sensitive medical specimens. We strictly adhere to all HIPAA and OSHA regulations, ensuring that patient privacy is protected and chain-of-custody protocols are flawlessly maintained from pickup to delivery. You can trust that your critical medical items are always in safe, compliant hands.",
            "We understand that medical needs often arise outside of standard business hours. That is why we offer flexible delivery options, including same-day rush services, STAT deliveries, and consistent scheduled routes. Whether you need an emergency blood transfer between hospitals or daily lab sample pickups from local clinics, we have the infrastructure and expertise to accommodate your requirements. Our specialized vehicles are equipped with the necessary temperature-control solutions to preserve the integrity of sensitive specimens and pharmaceuticals during transit.",
            "Choosing Six Point Logistics as your medical courier means choosing peace of mind. We take our responsibility to the healthcare community seriously, treating every delivery with the urgency and care it demands. Let us handle the complexities of medical transport so that your healthcare professionals can remain focused on what matters most: providing exceptional care to patients."
          ]}
        />
      </section>

      {/* FAQ SECTION */}
      <section className="pt-12 pb-24 px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Are your drivers certified?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              Yes, we have Bloodborne Pathogen training. We know how to move lab samples safely.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Do you do same-day delivery?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              Yes, we offer fast same-day and rush delivery for medical items that need to move quickly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">How do you keep items safe?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              We use the right coolers and bags to keep your medical items at the correct temperature.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA SECTION */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <img src="https://vibe.filesafe.space/1782248913428778838/assets/945bdd1e-9086-49fc-90e6-f46936d8cd12.jpg" alt="Medical Courier background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-8 max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl">
              Contact us today for fast and safe medical delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button asChild className="rounded-none bg-white text-primary hover:bg-white/90 px-8 h-14 text-base font-medium">
                <Link to="/contact">Request Courier Service <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-white/20 bg-transparent hover:bg-white/5 px-8 h-14 text-base font-medium text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}