import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play, Shield, Wrench, Star, Phone, Menu, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="font-sans bg-white text-black selection:bg-black/10">
      <SEOHead 
        title="Six Point Logistics — Secure Logistics & Compliance Operator"
        description="We provide secure port transportation, medical courier services, and on-site document notarization for businesses that require speed, compliance, and reliability."
        canonical="https://6pointlogistics.com/"
        ogImage="https://vibe.filesafe.space/1782248913428778838/assets/0da8d5ff-0d7f-4792-a49b-bfbb4c372b44.jpg"
      />
      <Header />
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col bg-primary">
        {/* Background Overlay */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-primary mix-blend-multiply"
        >
          <img 
            src="https://vibe.filesafe.space/1782248913428778838/assets/0da8d5ff-0d7f-4792-a49b-bfbb4c372b44.jpg"
            alt="Logistics background"
            className="absolute top-1/2 left-1/2 w-full h-full min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
        </motion.div>

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 w-full pt-28 md:pt-32 pb-12 md:pb-20">
          <div className="flex flex-col gap-5 max-w-[800px]">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white/90 font-medium text-lg tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              CT, NY, and NJ
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-bold text-5xl md:text-[64px] leading-[1.1] tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            >
              Secure Port & Medical Logistics Services
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl"
            >
              We provide secure port transportation, medical courier services, and on-site document notarization for businesses that require speed, compliance, and reliability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Button asChild className="rounded-none bg-white text-primary hover:bg-gray-100 px-8 h-14 text-base font-bold shadow-lg">
                <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-white/20 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white px-8 h-14 text-base font-medium shadow-lg">
                <a href="#services">What We Do</a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4 text-white" aria-hidden="true" />
                <span className="text-white text-sm font-medium">TWIC Cleared</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="text-white text-sm font-medium">Bloodborne Pathogen Certified</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4 text-white" aria-hidden="true" />
                <span className="text-white text-sm font-medium">Commissioned Notary Public</span>
              </div>
            </motion.div>
          </div>
        </main>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="min-h-screen flex flex-col justify-center py-24 md:py-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
              Your Secure Logistics Hub.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              We do more than drive trucks. We function as a secure logistics hub for import/export businesses, medical labs, law offices, and small manufacturers across CT, NY, and NJ.
            </p>
            <div className="flex flex-col gap-5 mt-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
                <span className="text-lg font-medium">Port & Medical Ready.</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="text-lg font-medium">On-Site Notary.</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/10 to-transparent blur-[100px] rounded-full pointer-events-none z-0"></div>
            <div className="relative z-10 aspect-video rounded-[2.5rem] overflow-hidden bg-black/5 border border-black/10 group shadow-lg">
              <img src="https://vibe.filesafe.space/1782248913428778838/assets/91e330ec-9c1f-4c43-a28c-6d3907ad49d1.png" alt="Logistics Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="services" className="min-h-screen flex flex-col justify-center py-24 md:py-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto border-t border-black/10">
        <div className="flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <h2 className="text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight max-w-2xl">
              What We Do.
            </h2>
            <p className="text-lg text-black/70 max-w-md">
              Safe, fast, and legal transport.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }} className="h-full">
              <Link to="/services/port-drayage" className="relative z-10 bg-white border border-black/10 rounded-3xl overflow-hidden flex flex-col hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group h-full">
                <div className="h-48 w-full overflow-hidden">
                  <img src="https://vibe.filesafe.space/1782248913428778838/assets/9e8e0408-c293-48e6-ae7d-023c3ce8f4a8.png" alt="Port Drayage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-medium mb-3">Port Drayage</h3>
                    <p className="text-black/70 leading-relaxed">
                      Picking up containers from NY/NJ ports and delivering them to warehouses in Connecticut. Our TWIC credential allows direct port access, faster gate processing, and secure government/military loads.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="h-full">
              <Link to="/services/medical-courier" className="relative z-10 bg-white border border-black/10 rounded-3xl overflow-hidden flex flex-col hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group h-full">
                <div className="h-48 w-full overflow-hidden">
                  <img src="https://vibe.filesafe.space/1782248913428778838/assets/945bdd1e-9086-49fc-90e6-f46936d8cd12.jpg" alt="Medical Courier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-medium mb-3">Medical Courier</h3>
                    <p className="text-black/70 leading-relaxed">
                      Transporting lab samples, medical supplies, and pharmacy deliveries. Our Bloodborne Pathogen certification assures clients of safe, compliant chain-of-custody handling.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }} className="h-full">
              <Link to="/services/notary" className="relative z-10 bg-white border border-black/10 rounded-3xl overflow-hidden flex flex-col hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group h-full">
                <div className="h-48 w-full overflow-hidden">
                  <img src="https://vibe.filesafe.space/1782248913428778838/assets/6e3f6502-53cc-424b-9ce1-21f5feb13510.jpg" alt="Mobile Notary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-medium mb-3">Mobile Notary & Apostille</h3>
                    <p className="text-black/70 leading-relaxed">
                      We can close contracts, notarize bills of lading on the spot, and process international documents with full compliance and speed.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto border-t border-black/10">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 text-center items-center"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Logistics Packages</h2>
            <p className="text-lg text-black/70 max-w-2xl">Simple, transparent pricing for your logistics and compliance needs.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-6 p-8 bg-black/5 rounded-3xl border border-black/10">
              <div>
                <h3 className="text-2xl font-bold">Basic</h3>
                <div className="text-primary font-bold text-xl mt-2">$150 – $300</div>
              </div>
              <p className="text-black/70">Local non-medical deliveries (rates scale from $50 for local up to $300 for 50+ miles) with optional notary.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-6 p-8 bg-primary text-white rounded-3xl shadow-xl transform md:-translate-y-4">
              <div>
                <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Most Popular</div>
                <h3 className="text-2xl font-bold">Professional</h3>
                <div className="text-white font-bold text-xl mt-2">$500 – $1,200</div>
              </div>
              <p className="text-white/90">Port pickups (TWIC), delivery, and document handling/notarization for importers and warehouses.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-6 p-8 bg-black/5 rounded-3xl border border-black/10">
              <div>
                <h3 className="text-2xl font-bold">Elite</h3>
                <div className="text-primary font-bold text-xl mt-2">$1,000 – $3,000+</div>
              </div>
              <p className="text-black/70">Secure transport for medical/government clients, including bloodborne-certified handling and included notary.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { number: "Port", label: "Ready" },
            { number: "Med", label: "Ready" },
            { number: "24/7", label: "Safe" },
            { number: "Legal", label: "Ready" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              className="flex flex-col gap-4 items-center text-center p-8 bg-black/5 backdrop-blur-md border border-black/10 rounded-[2.5rem]"
            >
              <div className="text-4xl lg:text-5xl font-medium tracking-tighter text-primary">
                {stat.number}
              </div>
              <div className="text-lg text-black/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <SEOContentBlock 
          title="Why Choose Six Point Logistics?"
          paragraphs={[
            "At Six Point Logistics, we understand that supply chain delays, compliance issues, and inefficient transportation can severely impact your bottom line. We are a specialized logistics hub focusing on the critical, high-stakes sectors of port drayage, medical courier, and mobile notary services. Operating extensively throughout Connecticut, New York, and New Jersey, our goal is to provide seamless, secure, and rapid transportation solutions that you can rely on day in and day out.",
            "Our extensive credentials set us apart. As a TWIC-cleared operator, we have direct, unescorted access to secure maritime facilities. This allows us to handle port drayage without relying on third-party brokers, ensuring faster gate processing and tighter security for your high-value or government loads. We understand the complexities of NY/NJ port operations and navigate them efficiently to deliver your containers directly to your warehouse.",
            "In the healthcare sector, our Bloodborne Pathogen Certification means we are fully equipped to transport sensitive medical materials, lab samples, and biohazards safely and legally. We maintain strict chain-of-custody protocols, giving clinics, hospitals, and pharmacies the peace of mind that their deliveries are handled with the utmost care and compliance.",
            "Additionally, our mobile notary and apostille services provide an essential layer of convenience for businesses. Whether you need a bill of lading notarized on the spot or international documents processed quickly, our commissioned notaries come to you. By integrating transportation with on-site compliance, Six Point Logistics offers a truly comprehensive solution designed for the modern business landscape."
          ]}
        />
      </section>

      {/* CTA SECTION */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <img src="https://vibe.filesafe.space/1782248913428778838/assets/0da8d5ff-0d7f-4792-a49b-bfbb4c372b44.jpg" alt="Logistics background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
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
              Contact us today for fast and safe service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button asChild className="rounded-none bg-white text-primary hover:bg-white/90 px-8 h-14 text-base font-medium">
                <Link to="/contact">Request Service <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link>
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
