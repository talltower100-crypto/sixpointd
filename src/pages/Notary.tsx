import { Button } from "@/components/ui/button";
import { FileSignature, Globe, Briefcase, Stamp, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Notary() {
  return (
    <div className="font-sans bg-white text-black selection:bg-primary/10">
      <SEOHead 
        title="Mobile Notary & Apostille Services | Six Point Logistics"
        description="On-site notarization and apostille services for businesses. We prepare, notarize, and submit documents for international and business use."
        canonical="https://6pointlogistics.com/services/notary"
        ogImage="https://vibe.filesafe.space/1782248913428778838/assets/6e3f6502-53cc-424b-9ce1-21f5feb13510.jpg"
      />
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex flex-col bg-primary">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-primary mix-blend-multiply opacity-80">
          <img 
            src="https://vibe.filesafe.space/1782248913428778838/assets/6e3f6502-53cc-424b-9ce1-21f5feb13510.jpg"
            alt="Mobile Notary"
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
              Legal Notary
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Mobile Notary & Apostille Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              We come to you to stamp and process your legal papers.
            </motion.p>
          </div>
        </main>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-medium tracking-tight">Fast legal stamps.</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              We come to your office or warehouse so you don't have to wait to get papers signed.
            </p>
            
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Stamp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">We Come To You</h3>
                  <p className="text-black/70">We check and stamp your papers on site.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Global Papers</h3>
                  <p className="text-black/70">We get your papers ready to use in other countries.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Business Packs</h3>
                  <p className="text-black/70">We help set up your business papers.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black text-white rounded-xl">
              <h4 className="font-bold mb-2">Disclaimer & Payment Policy</h4>
              <p className="text-white/80 text-sm mb-4">We are a document processing and apostille facilitation service. We do not provide legal advice.</p>
              <p className="text-white/80 text-sm">Payment must be collected via Stripe or Square prior to document submission.</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
              <h3 className="text-2xl font-medium mb-6">Mobile Notary Rates</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <span className="font-medium">Per Stamp (State Regulated)</span>
                  <span className="text-primary font-bold">$5 – $10</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Travel Fee</span>
                  <span className="text-primary font-bold">$25 – $75</span>
                </div>
              </div>
            </div>

            <div className="bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
              <h3 className="text-2xl font-medium mb-6">Apostille Tiers</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <div className="flex flex-col">
                    <span className="font-medium">Tier 1: Standard</span>
                    <span className="text-sm text-black/60">7–10 business days</span>
                  </div>
                  <span className="text-primary font-bold">$125 / doc</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <div className="flex flex-col">
                    <span className="font-medium">Tier 2: Expedited</span>
                    <span className="text-sm text-black/60">2–4 business days</span>
                  </div>
                  <span className="text-primary font-bold">$225 / doc</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <div className="flex flex-col">
                    <span className="font-medium">Tier 3: Same-Day / Walk-In</span>
                    <span className="text-sm text-black/60">State dependent</span>
                  </div>
                  <span className="text-primary font-bold">$300 – $350</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/10">
                  <div className="flex flex-col">
                    <span className="font-medium">Tier 4: Non-Hague</span>
                    <span className="text-sm text-black/60">Authentication</span>
                  </div>
                  <span className="text-primary font-bold">From $350</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="flex flex-col">
                    <span className="font-medium">Tier 5: Business Bundles</span>
                    <span className="text-sm text-black/60">Articles of Organization, Power of Attorney, etc.</span>
                  </div>
                  <span className="text-primary font-bold">$500 – $1,200</span>
                </div>
              </div>
              <Button asChild className="w-full mt-8 rounded-none h-14 text-base">
                <Link to="/contact">Request Notary Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <SEOContentBlock 
          title="Comprehensive Mobile Notary & Apostille Solutions"
          paragraphs={[
            "In today's fast-paced business environment, delays in document authentication can hold up critical deals, shipments, and international expansions. Six Point Logistics offers professional mobile notary and apostille facilitation services to keep your operations moving smoothly. We understand that your time is valuable, which is why our commissioned notaries travel directly to your office, warehouse, or home in Connecticut, New York, and New Jersey to provide on-site document verification and stamping.",
            "Our services are tailored to meet the needs of import/export businesses, law offices, real estate investors, and small manufacturers. We frequently notarize essential supply chain documents, such as bills of lading, commercial invoices, and vendor contracts, ensuring that your freight can move without legal friction. By combining our logistics expertise with on-site notary services, we offer a unique, integrated solution that saves you time and eliminates the need to coordinate with multiple service providers.",
            "For businesses expanding globally, navigating the complexities of international document authentication can be daunting. Our comprehensive apostille processing services simplify this process. Whether you need a standard apostille for a Hague Convention country or specialized non-Hague authentication, we handle the entire process from preparation to submission and tracking. We offer multiple tiers of service, including expedited and same-day options, to meet your specific deadlines and ensure your documents are legally recognized abroad.",
            "At Six Point Logistics, we pride ourselves on our accuracy, professionalism, and speed. While we are a document processing and apostille facilitation service and do not provide legal advice, we guarantee that your documents will be handled with the utmost confidentiality and compliance. Let us manage your notary and apostille needs so you can focus on growing your business."
          ]}
        />
      </section>

      {/* FAQ SECTION */}
      <section className="pt-12 pb-24 px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Will you come to my office?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              Yes, we are a mobile service. We drive to your office, warehouse, or home to stamp your papers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">How fast can you get an apostille?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              We have options from standard (7-10 days) all the way up to same-day service if you need it fast.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Do you give legal advice?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              No. We only process and stamp the papers. We cannot tell you what to write or sign legally.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA SECTION */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <img src="https://vibe.filesafe.space/1782248913428778838/assets/6e3f6502-53cc-424b-9ce1-21f5feb13510.jpg" alt="Notary background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
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
              Contact us today for fast and safe notary service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button asChild className="rounded-none bg-white text-primary hover:bg-white/90 px-8 h-14 text-base font-medium">
                <Link to="/contact">Request Notary Service <ArrowRight className="ml-2 w-5 h-5" /></Link>
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