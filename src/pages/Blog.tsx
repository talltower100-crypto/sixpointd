import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Why TWIC Certification Matters for Port Drayage",
      excerpt: "Learn how our TWIC certified drivers ensure seamless and secure container transport from NY/NJ ports.",
      date: "May 15, 2026",
      category: "Logistics"
    },
    {
      title: "Safe Medical Courier Services in CT",
      excerpt: "Understanding the importance of Bloodborne Pathogen Certification when transporting medical supplies and lab samples.",
      date: "April 22, 2026",
      category: "Medical"
    },
    {
      title: "Mobile Notary: Speeding Up Your Business Deals",
      excerpt: "How on-site notarization of bills of lading and contracts can save your business time and money.",
      date: "March 10, 2026",
      category: "Compliance"
    }
  ];

  return (
    <div className="font-sans bg-black text-white selection:bg-white/30 min-h-screen flex flex-col">
      <SEOHead 
        title="Logistics & Medical Courier Blog | Six Point Logistics"
        description="Read the latest news, updates, and insights on secure port drayage, medical courier services, and mobile notary compliance in CT, NY, and NJ."
        canonical="https://6pointlogistics.com/blog"
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Logistics Insights Blog.</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            News, tips, and expert insights on fast, secure port drayage, medical transport, and legal compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors group">
              <div className="text-sm text-primary font-medium mb-4">{post.category}</div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-white/70 mb-8 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="text-sm text-white/50">{post.date}</span>
                <button className="text-white group-hover:text-primary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <SEOContentBlock 
          title="Expert Insights from the Logistics and Compliance Frontlines"
          paragraphs={[
            "At Six Point Logistics, we believe that an informed client is an empowered client. The logistics and transportation industry is constantly evolving, with new compliance regulations, supply chain technologies, and port best practices emerging regularly. Our logistics blog serves as a central hub for breaking news, deep insights, and expert advice on the critical topics that affect your daily supply chain operations. Whether you are navigating the extreme complexities of port drayage in New York, managing highly sensitive medical lab deliveries in Connecticut, or seeking to understand the nuances of international document apostille authentication in New Jersey, our goal is to provide you with the exact information you need to make strategic, cost-saving business decisions.",
            "Our articles are drawn directly from our extensive, hands-on experience in the field. We delve deep into the critical importance of specialized credentials like the TWIC card and Bloodborne Pathogen Certification, explaining not just what they are, but exactly why they are absolutely essential for maintaining a secure, legal, and compliant supply chain. We also explore the real-world financial impact of delays at the busy NY/NJ ports and offer actionable, proven strategies for mitigating these risks through direct, broker-free drayage services.",
            "In the rapidly changing healthcare sector, we discuss the latest protocols for chain-of-custody management, biohazard safety, and temperature-controlled transport. We highlight how specialized, certified medical courier services can dramatically improve patient outcomes and clinic efficiency by ensuring zero-fail delivery rates. Furthermore, our legal compliance experts regularly share vital updates on the complex apostille process, offering step-by-step guidance on how to prepare your business documents for international use without facing unnecessary friction or rejection.",
            "We invite you to explore our blog, read our latest insights, and reach out directly to our team if you have any questions or require specialized logistics support. At Six Point Logistics, we are much more than just a transportation provider; we are your strategic partner in successfully navigating the complex world of modern logistics and compliance."
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
