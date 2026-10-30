import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

export default function AreasServed() {
  const areas = [
    {
      name: "Connecticut",
      slug: "connecticut",
      desc: "Local drayage, medical courier, and mobile notary services across CT."
    },
    {
      name: "New York",
      slug: "new-york",
      desc: "Port pickups, cross-border freight, and secure logistics in NY."
    },
    {
      name: "New Jersey",
      slug: "new-jersey",
      desc: "Direct container work and reliable delivery from NJ ports."
    },
    {
      name: "Rhode Island",
      slug: "rhode-island",
      desc: "Fast, reliable logistics and compliance services across RI."
    }
  ];

  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title="Service Areas: CT, NY, NJ, RI | Six Point Logistics"
        description="Six Point Logistics provides secure port drayage, certified medical courier, and mobile notary services across Connecticut, New York, New Jersey, and Rhode Island."
        canonical="https://6pointlogistics.com/areas-served"
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Logistics Service Areas.</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            We are the premier secure logistics hub for the Connecticut, New York, New Jersey, and Rhode Island corridor, specializing in TWIC port access and medical transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Link 
              key={area.slug} 
              to={`/areas-served/${area.slug}`}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{area.name}</h2>
              <p className="text-white/70 mb-8 flex-1">{area.desc}</p>
              <div className="flex items-center text-primary font-medium mt-auto">
                View Coverage <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        <SEOContentBlock 
          title="Comprehensive Logistics Coverage Across the Tri-State Area and Rhode Island"
          paragraphs={[
            "Six Point Logistics is proud to serve a highly dynamic and demanding region, offering our specialized transportation and compliance services across Connecticut, New York, New Jersey, and Rhode Island. Our strategic location and comprehensive operational coverage allow us to act as a vital logistics hub for businesses operating within this bustling Northeast corridor. We understand the unique geographical, traffic, and logistical challenges of the area, enabling us to provide fast, efficient, and exceptionally reliable service for high-stakes freight.",
            "In Connecticut, we support local warehouses, medical facilities, and corporate businesses with rapid port drayage, same-day medical courier services, and on-site notarization. Our deep knowledge of CT routes ensures that your critical deliveries are always on time. In New York, we handle the intense demands of daily port pickups, cross-border freight coordination, and secure logistics in one of the world's busiest commercial hubs. Our TWIC certification is particularly crucial here, allowing us to navigate secure NY port areas without relying on third-party brokers.",
            "New Jersey's extensive port infrastructure requires a logistics partner with direct access and proven reliability. We provide direct container work and dependable delivery from major NJ ports, streamlining the supply chain for importers, exporters, and distributors. Furthermore, our dedicated expansion into Rhode Island means we can bring our fast, reliable logistics, biohazard transport, and apostille compliance services to even more businesses, ensuring that the entire region benefits from our commitment to logistical excellence.",
            "Whether you need a container moved from a busy New Jersey port to a quiet suburban Connecticut warehouse, or a rush medical lab sample delivery across state lines into New York, Six Point Logistics has the coverage, the specialized credentials, and the capability to get the job done right, every single time."
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
              Contact us today for fast and safe service.
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
