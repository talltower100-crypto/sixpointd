import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <div className="font-sans bg-white text-black selection:bg-primary/10">
      <SEOHead 
        title="Logistics Case Studies | Six Point Logistics CT/NY/NJ"
        description="Read our success stories. See exactly how Six Point Logistics helps businesses in CT, NY, and NJ with secure port drayage, medical delivery, and mobile notary services."
        canonical="https://6pointlogistics.com/case-studies"
      />
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex flex-col bg-primary pt-20">
        <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 w-full">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white/90 font-medium text-lg tracking-wide uppercase"
            >
              Real Results
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Logistics Case Studies
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              See exactly how we help local tri-state businesses move freight fast, transport medical samples securely, and stay legally compliant.
            </motion.p>
          </div>
        </main>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Case Study 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-center bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit text-sm font-medium">
              Medical Courier
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Lab Sample Delivery</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              A busy medical lab needed to move over 500 samples a day safely. We set up a daily route with our certified drivers.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <span>100% on-time rate</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Safe and clean transport</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="flex flex-col md:flex-row gap-10 items-center bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit text-sm font-medium">
              Port Drayage
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Port to Warehouse</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              A store in CT had goods stuck at the NY port. Using our TWIC cards, we went right in and got their containers fast.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <span>Cut wait times by 40%</span>
              </li>
              <li className="flex items-center gap-3">
                <span>No broker delays</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="flex flex-col md:flex-row gap-10 items-center bg-black/5 rounded-[2rem] p-8 md:p-12 border border-black/10">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit text-sm font-medium">
              Mobile Notary
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Urgent Apostille</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              A business needed papers stamped for a deal in another country. We drove to their office and got it done the same day.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <span>Same-day service</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Saved the global deal</span>
              </li>
            </ul>
          </div>
        </div>

        <SEOContentBlock 
          title="Proven Success in High-Stakes Logistics and Drayage"
          paragraphs={[
            "The case studies presented above represent just a small fraction of the successful, long-term partnerships we have built at Six Point Logistics. We deeply understand that in the logistics industry, promises mean absolutely nothing without the proven ability to execute flawlessly under pressure. Our track record speaks for itself. We have consistently demonstrated our unique capacity to solve complex transportation, supply chain, and compliance challenges for businesses operating in some of the most demanding and congested environments in the country.",
            "Our success is firmly rooted in our specialized, highly certified approach. By focusing intensely on critical lanes—Secure Port Drayage, Certified Medical Courier transport, and Mobile Notary compliance—we have developed a depth of expertise that generalist transportation companies simply cannot match. When a client comes to us with a critical container stuck at a heavily congested New Jersey port, our TWIC-certified drivers know exactly how to navigate the terminal, secure the load legally, and expedite the delivery to their Connecticut warehouse without broker delays. This direct, knowledgeable approach is exactly what drives our consistently high performance.",
            "Similarly, in the highly regulated medical field, our Bloodborne Pathogen Certification is not just a badge; it is a fundamental, non-negotiable operational standard. Clinics, labs, and hospitals trust us with their most sensitive, perishable materials because we have proven, time and again, that we adhere strictly to safety protocols and chain-of-custody requirements. Our zero-fail mentality ensures that critical lab samples, biohazards, and pharmaceuticals reach their destinations safely and on time, every single time.",
            "We approach our legal compliance and notary services with the exact same level of dedication and urgency. We have saved numerous high-value international deals by providing rapid, on-site apostille facilitation and document notarization when time was running out. These real-world case studies highlight our unwavering commitment to being a true, full-service logistics hub—a partner that not only moves your physical goods but also ensures your business operations remain legally compliant and completely uninterrupted."
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
                <Link to="/contact">Request Service <ArrowRight className="ml-2 w-5 h-5" /></Link>
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
