import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // Translates the container horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen">
      <SEOHead 
        title="About Us | Six Point Logistics"
        description="A secure logistics and compliance operator in the CT, NY, and NJ corridor. TWIC certified, BBP certified, and commissioned notary."
        canonical="https://6pointlogistics.com/about"
        ogImage="https://vibe.filesafe.space/1782248913428778838/assets/91e330ec-9c1f-4c43-a28c-6d3907ad49d1.png"
      />
      <Header />

      {/* SECTION 1: HERO BLOCK */}
      <section className="relative h-screen w-full flex flex-col justify-end pb-[20px] px-6 md:px-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://vibe.filesafe.space/1782248913428778838/assets/91e330ec-9c1f-4c43-a28c-6d3907ad49d1.png"
            alt="Logistics Hub"
            className="absolute top-1/2 left-1/2 w-full h-full min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col">
          <h1 className="text-white text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-none drop-shadow-lg">
            About Six Point Logistics
          </h1>
        </div>
      </section>

      {/* SECTION 2: HORIZONTAL TIMELINE SCROLL BLOCK */}
      <section ref={targetRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-20 w-[300vw] md:w-[200vw]">
            {[
              { year: "2018", text: "We started as a fast, local delivery service." },
              { year: "2021", text: "We grew to pick up port loads and medical items." },
              { year: "2026", text: "Now we safely move items across CT, NY, and NJ." }
            ].map((milestone) => (
              <div key={milestone.year} className="w-[85vw] md:w-[50vw] flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <div className="text-7xl md:text-9xl font-bold text-white tracking-tighter">{milestone.year}</div>
                <p className="text-2xl md:text-4xl text-white/70 font-medium leading-tight max-w-2xl">
                  {milestone.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: MEET THE TEAM BLOCK */}
      <section className="min-h-screen bg-black flex flex-col justify-center px-6 md:px-20 py-24 border-t border-white/10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">The Team</h2>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-0">
          {/* Left 50% - Grid of 8 cards over 2 rows */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
            {[
              { name: "John Doe", title: "Boss", desc: "Leads the team." },
              { name: "Michael Chen", title: "Ops", desc: "Runs the trucks." },
              { name: "David Thompson", title: "Port Lead", desc: "Runs port pickups." },
              { name: "Emily Rodriguez", title: "Safety", desc: "Keeps us safe." },
              { name: "James Wilson", title: "Security", desc: "Keeps us secure." },
              { name: "Anna Smith", title: "Notary", desc: "Stamps papers." },
              { name: "Robert Fox", title: "Medical Lead", desc: "Runs med deliveries." },
              { name: "Lisa Wong", title: "Support", desc: "Helps you out." },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <Avatar className="w-20 h-20 md:w-24 md:h-24 border border-white/20 transition-transform group-hover:scale-105">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=team${i}`} />
                  <AvatarFallback className="bg-white/10 text-white">{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-base text-white opacity-100 whitespace-nowrap">{member.name}</span>
                  <span className="text-sm text-white/70 mb-2">{member.title}</span>
                  <span className="text-xs text-white/50 leading-tight max-w-[120px]">{member.desc}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Right 50% - Empty Negative Space */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION & FOOTER */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto py-24 border-t border-white/10">
        <SEOContentBlock 
          title="Our Commitment to Excellence"
          paragraphs={[
            "Six Point Logistics was founded with a clear mission: to provide secure, compliant, and highly reliable transportation services for businesses that cannot afford delays. Over the years, we have evolved from a fast local delivery service into a comprehensive logistics hub serving the Connecticut, New York, and New Jersey corridor. Our growth has been driven by our unwavering commitment to our clients and our dedication to maintaining the highest industry standards.",
            "We believe that true logistics excellence goes beyond simply moving items from point A to point B. It requires a deep understanding of the regulatory landscapes, specialized handling procedures, and the unique challenges faced by our clients. This is why we have invested heavily in our credentials. Our TWIC clearance allows us to operate seamlessly within secure port areas, while our Bloodborne Pathogen Certification ensures we meet the stringent requirements of the healthcare industry.",
            "Our team is the backbone of our operations. From our experienced drivers to our dedicated support staff and commissioned notaries, every member of Six Point Logistics plays a vital role in delivering exceptional service. We prioritize safety, security, and speed in everything we do, ensuring that your cargo, documents, and medical supplies are always in the best hands.",
            "As we look to the future, we remain focused on expanding our capabilities and continuing to serve as the trusted logistics partner for import/export businesses, medical labs, law offices, and small manufacturers across the tri-state area. When you choose Six Point Logistics, you are choosing a partner dedicated to your success."
          ]}
        />
      </section>

      {/* CTA SECTION */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto relative w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <img src="https://vibe.filesafe.space/1782248913428778838/assets/0da8d5ff-0d7f-4792-a49b-bfbb4c372b44.jpg" alt="Logistics background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
