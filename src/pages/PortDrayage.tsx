import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, MapPin, Truck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PortDrayage() {
  return (
    <div className="font-sans bg-white text-black selection:bg-primary/10">
      <SEOHead 
        title="Port Drayage Services | Six Point Logistics"
        description="Secure port drayage in the CT, NY, and NJ corridor. TWIC certified access for direct container pickup and delivery without broker delays."
        canonical="https://6pointlogistics.com/services/port-drayage"
        ogImage="https://vibe.filesafe.space/1782248913428778838/assets/9e8e0408-c293-48e6-ae7d-023c3ce8f4a8.png"
      />
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex flex-col bg-primary">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-primary mix-blend-multiply opacity-80">
          <img 
            src="https://vibe.filesafe.space/1782248913428778838/assets/9e8e0408-c293-48e6-ae7d-023c3ce8f4a8.png"
            alt="Port Drayage"
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
              Port Access
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Port Drayage Service - Six Point Logistics
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              We pick up containers at the port and bring them to you fast.
            </motion.p>
          </div>
        </main>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-medium tracking-tight">Straight from the port.</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              We have the right badges to get into secure ports. This means we can pick up your loads without waiting for a middleman.
            </p>
            
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Port Ready</h3>
                  <p className="text-black/70">We can go right into NY and NJ ports.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Local Delivery</h3>
                  <p className="text-black/70">We bring your freight from the port to your door.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Cross-Border</h3>
                  <p className="text-black/70">We can help move goods to Canada or the Caribbean.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10 h-fit">
            <h3 className="text-2xl font-medium mb-6">Service Rates</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center py-3 border-b border-black/10">
                <span className="font-medium">Local Drayage</span>
                <span className="text-primary font-bold">$300 – $800 / load</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-black/10">
                <span className="font-medium">Longer Runs</span>
                <span className="text-primary font-bold">$800 – $1,500+</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-black/10">
                <span className="font-medium">Base Rate</span>
                <span className="text-primary font-bold">$150 – $300</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-black/10">
                <span className="font-medium">Wait Fee</span>
                <span className="text-primary font-bold">$50 / hour</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium">Rush Fee</span>
                <span className="text-primary font-bold">$50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <SEOContentBlock 
          title="Secure and Efficient Port Drayage"
          paragraphs={[
            "Port drayage is the critical first step in your supply chain, and delays at the port can ripple through your entire operation. At Six Point Logistics, we specialize in providing seamless, secure, and rapid container pickup and delivery services from the bustling ports of New York and New Jersey to warehouses and distribution centers throughout Connecticut and the broader tri-state area. We understand that in the world of logistics, time is money, and our goal is to keep your cargo moving without unnecessary interruptions.",
            "What sets us apart is our TWIC (Transportation Worker Identification Credential) certification. This allows our drivers direct, unescorted access to secure maritime facilities. By eliminating the need for third-party brokers or escort services, we significantly reduce gate processing times and ensure that your high-value, sensitive, or government loads are handled with the utmost security. When you work with Six Point Logistics, you are working directly with the professionals who will transport your goods.",
            "Our fleet is equipped to handle a wide variety of containerized freight. Whether you are importing retail consumer goods, industrial raw materials, or specialized equipment, we have the capability to manage the logistics from the moment the container is unloaded from the vessel. We offer flexible scheduling, including rush deliveries and cross-border freight coordination, to meet your specific operational requirements. Our transparent pricing model, with clear base rates and wait fees, ensures you always know what to expect.",
            "Partnering with Six Point Logistics for your port drayage needs means choosing a reliable, experienced, and fully credentialed operator. We take the stress out of port operations, allowing you to focus on your core business while we handle the heavy lifting. Contact us today to learn more about how our TWIC-certified drayage services can streamline your supply chain and improve your bottom line."
          ]}
        />
      </section>

      {/* FAQ SECTION */}
      <section className="pt-12 pb-24 px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">What areas do you serve?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              We pick up from NY and NJ ports and bring loads to warehouses in CT, NY, and NJ.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Do you have a TWIC card?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              Yes, our team has TWIC cards. We can go straight into secure port areas to pick up your freight.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">What are your wait fees?</AccordionTrigger>
            <AccordionContent className="text-base text-black/70">
              We charge a $50 wait fee per hour after our standard base wait time at the port.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA SECTION */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <img src="https://vibe.filesafe.space/1782248913428778838/assets/9e8e0408-c293-48e6-ae7d-023c3ce8f4a8.png" alt="Port Drayage background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
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
              Contact us today for fast and safe drayage service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button asChild className="rounded-none bg-white text-primary hover:bg-white/90 px-8 h-14 text-base font-medium">
                <Link to="/contact">Request Drayage Service <ArrowRight className="ml-2 w-5 h-5" /></Link>
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