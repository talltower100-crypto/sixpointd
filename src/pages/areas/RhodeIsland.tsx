import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RhodeIsland() {
  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title="Rhode Island Logistics & Courier | Six Point Logistics"
        description="Providing secure port drayage, medical courier, and mobile notary services throughout Rhode Island."
        canonical="https://6pointlogistics.com/areas-served/rhode-island"
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-primary mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-medium uppercase tracking-wider text-sm">Area Served</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Logistics Services in Rhode Island.</h1>
        <p className="text-xl text-white/70 max-w-2xl mb-12">
          Fast, reliable logistics and compliance services for warehouses, medical labs, and businesses across RI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Services in RI</h2>
            <ul className="space-y-4">
              {[
                "Local Port Drayage Delivery",
                "Same-Day Medical Courier",
                "Mobile Notary & Apostille",
                "Warehouse Distribution",
                "Cross-Border Freight Coordination"
              ].map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Ready to move?</h3>
            <p className="text-white/70 mb-8">
              Whether you need a container pulled from the port to your RI warehouse, or a rush medical delivery to a local clinic, we are ready.
            </p>
            <Button asChild className="w-fit rounded-full bg-white text-black hover:bg-gray-200 px-8 h-14 text-base font-bold">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold mb-8">Cities We Serve in RI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Providence", "Cranston", "Warwick", "Pawtucket", 
              "East Providence", "Woonsocket", "Coventry", "Cumberland", 
              "North Providence", "South Kingstown"
            ].map(city => (
              <Link 
                key={city} 
                to={`/areas-served/rhode-island/${city.toLowerCase().replace(/ /g, '-')}`} 
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-colors text-white/80 hover:text-white"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        <SEOContentBlock 
          title="Reliable Logistics Solutions for Rhode Island"
          paragraphs={[
            "Rhode Island may be the smallest state, but its strategic coastal location and thriving business community require robust, dependable logistics support. Six Point Logistics extends its premier transportation and compliance services throughout Rhode Island, providing the same high level of security, speed, and reliability that we offer across the broader tri-state area. From Providence to South Kingstown, we are here to support your operations.",
            "Our logistics services in Rhode Island are designed to integrate seamlessly with regional supply chains. While our port drayage operations frequently originate in NY/NJ, we efficiently coordinate the secure transport of those imported goods directly to Rhode Island warehouses and distribution centers. Our TWIC-certified drivers ensure that your freight is handled securely from the port terminal all the way to its final destination.",
            "For Rhode Island's healthcare providers, our medical courier services offer a critical lifeline. We provide secure, Bloodborne Pathogen Certified transport for lab samples, pharmaceuticals, and sensitive medical supplies. Whether you need daily scheduled routes between clinics or emergency STAT deliveries to local hospitals, our trained professionals handle every item with the utmost care and compliance.",
            "To further support Rhode Island businesses, we offer mobile notary and apostille facilitation services. Our commissioned notaries travel to your location to authenticate important contracts, bills of lading, and international trade documents. By choosing Six Point Logistics, Rhode Island businesses gain a comprehensive partner dedicated to streamlining both their transportation and document processing needs."
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
              Contact us today for fast and safe service in Rhode Island.
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
