import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewJersey() {
  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title="New Jersey Logistics & Courier | Six Point Logistics"
        description="Providing secure port drayage, medical courier, and mobile notary services throughout New Jersey."
        canonical="https://6pointlogistics.com/areas-served/new-jersey"
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-primary mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-medium uppercase tracking-wider text-sm">Area Served</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Logistics Services in New Jersey.</h1>
        <p className="text-xl text-white/70 max-w-2xl mb-12">
          Direct container work and reliable delivery from NJ ports to your distribution center.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Services in NJ</h2>
            <ul className="space-y-4">
              {[
                "NJ Port Drayage (TWIC)",
                "Warehouse Transfers",
                "Medical Courier Services",
                "Apostille & Notary Services",
                "B2B Freight Delivery"
              ].map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Your Logistics Hub.</h3>
            <p className="text-white/70 mb-8">
              Avoid broker delays. We handle direct container work and secure transport right out of New Jersey ports.
            </p>
            <Button asChild className="w-fit rounded-full bg-white text-black hover:bg-gray-200 px-8 h-14 text-base font-bold">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold mb-8">Cities We Serve in NJ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Newark", "Jersey City", "Paterson", "Elizabeth", 
              "Lakewood", "Edison", "Woodbridge", "Toms River", 
              "Hamilton", "Trenton"
            ].map(city => (
              <Link 
                key={city} 
                to={`/areas-served/new-jersey/${city.toLowerCase().replace(/ /g, '-')}`} 
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-colors text-white/80 hover:text-white"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        <SEOContentBlock 
          title="Your Logistics Hub in New Jersey"
          paragraphs={[
            "New Jersey is the beating heart of East Coast logistics, home to massive port facilities and an extensive network of warehouses and distribution centers. Six Point Logistics is deeply embedded in this infrastructure, providing specialized transportation and compliance services that keep New Jersey's supply chains flowing smoothly. From Newark and Jersey City down to Trenton and beyond, we are your trusted logistics partner.",
            "Port drayage is our specialty in New Jersey. With our TWIC credentials, we have direct, unescorted access to the region's secure maritime terminals. We specialize in pulling containers quickly and efficiently, bypassing the delays caused by escort services or third-party brokers. Whether your freight is destined for a local New Jersey warehouse or requires cross-border coordination, we handle it with precision and speed.",
            "In addition to heavy freight, we provide critical medical courier services for New Jersey's robust healthcare and pharmaceutical industries. Our drivers are Bloodborne Pathogen Certified, ensuring the safe, compliant transport of lab samples, biohazards, and medical supplies. We maintain strict temperature controls and chain-of-custody protocols, delivering peace of mind along with your sensitive materials.",
            "We round out our offerings with mobile notary and apostille services, bringing vital document authentication directly to your New Jersey office or warehouse. By handling both the physical movement of your goods and the legal processing of your documents, Six Point Logistics offers a streamlined, comprehensive solution that saves you time and reduces operational friction."
          ]}
        />
      </main>

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
              Contact us today for fast and safe service in New Jersey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-none bg-white text-primary hover:bg-white/90 px-8 h-14 text-base font-medium transition-colors">
                Request Service <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent hover:bg-white/5 px-8 h-14 text-base font-medium text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
