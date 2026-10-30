import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function formatName(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function CityPage() {
  const { state, city } = useParams();
  
  const stateName = state ? formatName(state) : "the Region";
  const cityName = city ? formatName(city) : "this City";

  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title={`${cityName}, ${stateName} Logistics & Courier | Six Point Logistics`}
        description={`Providing secure port drayage, medical courier, and mobile notary services in ${cityName}, ${stateName}.`}
        canonical={`https://6pointlogistics.com/areas-served/${state}/${city}`}
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-primary mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-medium uppercase tracking-wider text-sm">Area Served</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{cityName}, {stateName}.</h1>
        <p className="text-xl text-white/70 max-w-2xl mb-12">
          Fast, reliable logistics and compliance services for warehouses, medical labs, and businesses in {cityName} and the surrounding {stateName} area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Services in {cityName}</h2>
            <ul className="space-y-4">
              {[
                "Local Port Drayage Delivery",
                "Same-Day Medical Courier",
                "Mobile Notary & Apostille",
                "Warehouse Distribution",
                "B2B Freight Delivery"
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
              Whether you need a container pulled from the port to your warehouse, or a rush medical delivery to a local clinic in {cityName}, we are ready.
            </p>
            <Button asChild className="w-fit rounded-full bg-white text-black hover:bg-gray-200 px-8 h-14 text-base font-bold">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>

        <SEOContentBlock 
          title={`Comprehensive Logistics Solutions in ${cityName}, ${stateName}`}
          paragraphs={[
            `When businesses in ${cityName} need reliable, secure, and fast transportation, Six Point Logistics is the premier choice. Operating throughout ${stateName} and the greater tri-state area, we specialize in offering a seamless logistics hub experience. Our core services—Port Drayage, Medical Courier, and Mobile Notary—are designed to meet the rigorous demands of modern supply chains, healthcare providers, and legal professionals. We understand that in ${cityName}, time is money, and compliance is non-negotiable.`,
            `Our TWIC-certified port drayage services ensure that your containers are picked up directly from the secure ports and delivered safely to your warehouse or distribution center in ${cityName}. By maintaining direct access to secure port areas, we eliminate the need for third-party brokers, speeding up the entire process. Whether you are moving retail goods, industrial materials, or government loads, our fleet is equipped to handle the job with precision and care.`,
            `In the healthcare sector, our Bloodborne Pathogen Certification sets us apart. Medical facilities, labs, and pharmacies in ${cityName} trust us to transport sensitive materials, including lab samples, biohazards, and medical supplies. We maintain strict chain-of-custody protocols to ensure that every delivery is secure, compliant, and on time. Our same-day medical courier services are a lifeline for clinics that depend on rapid turnaround times to provide the best patient care.`,
            `Additionally, our commissioned Mobile Notary and Apostille services provide unmatched convenience for businesses in ${cityName}. We come directly to your office, warehouse, or home to notarize bills of lading, contracts, affidavits, and real estate documents. For companies expanding internationally, our Apostille processing ensures your documents are legally recognized abroad. By combining transportation with on-site compliance services, Six Point Logistics offers a truly comprehensive solution for all your business needs in ${cityName}, ${stateName}.`
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
              Contact us today for fast and safe service in {cityName}.
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
