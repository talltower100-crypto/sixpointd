import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewYork() {
  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title="New York Port Drayage & Medical Courier | Six Point Logistics"
        description="Six Point Logistics provides secure TWIC port drayage, certified medical courier, and mobile notary services throughout New York City and Upstate NY."
        canonical="https://6pointlogistics.com/areas-served/new-york"
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-primary mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-medium uppercase tracking-wider text-sm">Area Served</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">New York Logistics Services.</h1>
        <p className="text-xl text-white/70 max-w-2xl mb-12">
          Secure TWIC port pickups and fast medical delivery services for import/export businesses, labs, and medical facilities across New York.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Services in NY</h2>
            <ul className="space-y-4">
              {[
                "NY Port Container Pickups (TWIC)",
                "Medical Supply Transport",
                "Mobile Notary Public",
                "Government/Military Loads",
                "Same-Day Courier Runs"
              ].map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Secure & Fast.</h3>
            <p className="text-white/70 mb-8">
              We have the TWIC credentials to enter secure port areas and the speed to get your freight where it needs to go.
            </p>
            <Button asChild className="w-fit rounded-full bg-white text-black hover:bg-gray-200 px-8 h-14 text-base font-bold">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold mb-8">Cities We Serve in NY</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "New York City", "Hempstead", "Brookhaven", "Islip", 
              "Oyster Bay", "Buffalo", "Rochester", "Yonkers", 
              "Syracuse", "Albany"
            ].map(city => (
              <Link 
                key={city} 
                to={`/areas-served/new-york/${city.toLowerCase().replace(/ /g, '-')}`} 
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-colors text-white/80 hover:text-white"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        <SEOContentBlock 
          title="Comprehensive Logistics Across New York City and State"
          paragraphs={[
            "Operating in New York requires a logistics partner that truly understands the fast pace, intense traffic, and demanding schedules of one of the world's most dynamic commercial environments. Six Point Logistics offers specialized, high-stakes transportation and compliance services across New York State, from the dense urban centers of New York City and Long Island to the expansive industrial hubs of Upstate New York. We are built to handle the pressure and deliver results.",
            "Our TWIC-certified port drayage services are absolutely essential for New York's massive import/export sector. We navigate the extreme complexities of the regional NY/NJ ports with ease, picking up your containers directly and delivering them securely to your distribution centers or warehouses. By eliminating the middleman and leveraging our direct port access, we reduce delays and ensure that your goods keep moving, even during peak congestion periods at the terminals.",
            "New York's world-class healthcare facilities demand world-class, error-free logistics. Our medical courier services are fully Bloodborne Pathogen Certified, providing secure, rapid transport for lab samples, sensitive medical equipment, biohazards, and pharmaceuticals. We offer flexible scheduling tailored to medical facilities, including STAT and same-day deliveries, ensuring that clinics, labs, and hospitals across New York have exactly what they need to provide exceptional patient care.",
            "To fully support New York businesses beyond the road, we also provide mobile notary and apostille facilitation services. Whether you are closing a major international deal in Manhattan, notarizing a bill of lading at the port, or processing international trade documents in Buffalo, our commissioned notaries come directly to your office. This integrated approach to physical transportation and legal compliance makes Six Point Logistics the ultimate partner for businesses operating in New York."
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
              Contact us today for fast and safe service in New York.
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
