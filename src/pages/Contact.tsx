import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Menu, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

export default function Contact() {
  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title="Contact Six Point Logistics | Port Drayage & Medical Couriers"
        description="Contact Six Point Logistics today to request secure port drayage, certified medical courier, or mobile notary services in the CT, NY, and NJ corridor."
        canonical="https://6pointlogistics.com/contact"
        ogImage="https://vibe.filesafe.space/1782248913428778838/assets/91e330ec-9c1f-4c43-a28c-6d3907ad49d1.png"
      />
      <Header />

      {/* Main Content - 50/50 Split */}
      <main className="flex-1 flex flex-col lg:flex-row w-full pt-24 lg:pt-0">
        {/* Left Side: Messaging & Imagery */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://vibe.filesafe.space/1782248913428778838/assets/91e330ec-9c1f-4c43-a28c-6d3907ad49d1.png" alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
          </div>
          <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-white/5 to-transparent blur-[120px] pointer-events-none z-0 -translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10 flex flex-col gap-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Ready to <br /> secure your <span className="text-white/70">logistics?</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Need TWIC port drayage, certified medical courier, or mobile notary services? Contact Six Point Logistics today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 mt-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Call us directly</div>
                  <div className="text-lg font-medium">(917) 302-3111</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email us</div>
                  <div className="text-lg font-medium">info@sixpointlogistics.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Service Area</div>
                  <div className="text-lg font-medium">Connecticut, New York, New Jersey</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-20 bg-black/50 border-l border-white/10 backdrop-blur-2xl">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl relative"
          >
            <h2 className="text-3xl font-semibold mb-8">Get Started</h2>
            
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl px-5 focus-visible:ring-1 focus-visible:ring-white/50"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl px-5 focus-visible:ring-1 focus-visible:ring-white/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/70 ml-1">Phone Number</label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(555) 000-0000" 
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl px-5 focus-visible:ring-1 focus-visible:ring-white/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Project Details</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your logistics needs..." 
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/30 min-h-[120px] rounded-xl p-5 focus-visible:ring-1 focus-visible:ring-white/50 resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-14 rounded-xl bg-white text-black hover:bg-gray-200 font-semibold text-lg mt-4 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </main>
      
      <section className="px-6 md:px-20 max-w-7xl mx-auto w-full">
        <SEOContentBlock 
          title="Partner With a Tri-State Logistics Leader"
          paragraphs={[
            "When you contact Six Point Logistics, you are reaching out to a highly specialized team of dedicated professionals committed to solving your most complex transportation, freight, and compliance challenges. We deeply understand that every business has unique, time-sensitive needs, which is exactly why we take the time to listen, understand your specific load requirements, and tailor our logistics services accordingly. Whether you need a one-time rush medical delivery in Connecticut or a long-term port drayage partnership in New York and New Jersey, we are ready to assist you immediately.",
            "Our logistics customer service philosophy is built entirely on transparency, rapid responsiveness, and unwavering reliability. From the moment you request a freight quote to the final secure delivery of your container, goods, or legal documents, we keep you fully informed every single step of the way. We utilize advanced tracking and constant communication to ensure that you always know the exact status of your shipments. Our dedicated support team is always available to answer your questions and address any supply chain concerns you may have.",
            "We proudly serve a diverse, high-stakes range of clients, including busy import/export businesses, medical labs, law offices, and local manufacturers. No matter your industry, we have the specialized credentials and operational experience to handle your logistics with the utmost care and professionalism. Our active TWIC clearance, Bloodborne Pathogen Certification, and commissioned notary status are clear testaments to our commitment to maintaining the absolute highest standards of safety, speed, and legal compliance.",
            "Don't let logistical bottlenecks, port delays, or compliance issues slow down your business growth. Contact Six Point Logistics today to discuss exactly how we can streamline your supply chain, ensure total compliance, and deliver fast results you can count on. We look forward to becoming your trusted, go-to logistics hub in the CT, NY, and NJ corridor."
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}
