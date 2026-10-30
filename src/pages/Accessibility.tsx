import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

export default function Accessibility() {
  return (
    <div className="font-sans bg-white text-black min-h-screen selection:bg-black/10">
      <SEOHead 
        title="Digital Accessibility Statement | Six Point Logistics CT/NY/NJ"
        description="Read the digital accessibility statement for Six Point Logistics. We are committed to inclusive digital access for our port drayage, medical courier, and notary clients."
        canonical="https://6pointlogistics.com/accessibility"
      />
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Digital Accessibility Statement</h1>
          <div className="text-lg text-black/70 mt-2">Last updated: {new Date().toLocaleDateString()}</div>
          
          <div className="prose prose-lg prose-black max-w-none mt-8">
            <p>Six Point Logistics is fully committed to ensuring digital accessibility for all individuals, including those with disabilities. As a premier provider of secure port drayage, medical courier services, and mobile notary solutions across Connecticut, New York, and New Jersey, we believe our digital presence should be as reliable and accessible as our physical logistics operations.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Our Conformance Status</h2>
            <p>The Web Content Accessibility Guidelines (WCAG) dictate the requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Six Point Logistics actively strives to maintain conformance with WCAG 2.1 level AA standards to ensure a seamless experience for our clients booking medical deliveries, port pickups, or apostille services online.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">We Welcome Your Feedback</h2>
            <p>We are constantly seeking to improve our digital accessibility. If you encounter any accessibility barriers while using the Six Point Logistics website to request services or view our logistics packages, please let us know immediately:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Phone: (917) 302-3111</li>
              <li>Email: info@sixpointlogistics.com</li>
              <li>Service Regions: NY, NJ, CT, RI</li>
            </ul>
            <p className="mt-4">We aim to respond to all accessibility feedback within 3 to 5 business days, ensuring your logistics needs are met without delay.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Technical Specifications</h2>
            <p>The accessibility of the Six Point Logistics platform relies on the following technologies to work effectively with your web browser and any assistive technologies or plugins you may use:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p className="mt-4">These core technologies are relied upon to deliver our secure logistics hub experience in conformance with modern accessibility standards.</p>
          </div>
        </motion.div>
        <SEOContentBlock 
          title="Inclusive Logistics and Digital Access"
          paragraphs={[
            "Six Point Logistics believes that efficient transportation and compliance services should be accessible to everyone. Just as we strive to remove barriers in the physical supply chain—navigating congested ports and expediting critical medical deliveries—we are equally dedicated to removing barriers in the digital space. Our commitment to digital accessibility is an extension of our core mission to serve our clients with reliability and respect.",
            "We understand that our clients across Connecticut, New York, and New Jersey rely on our website to request TWIC-certified port drayage, schedule Bloodborne Pathogen-certified medical couriers, and book mobile notary services. It is essential that our digital platform is usable by all individuals, regardless of ability or the assistive technologies they may use.",
            "We continuously monitor and update our website to align with the Web Content Accessibility Guidelines (WCAG). This includes ensuring proper contrast ratios, providing alt text for images, and maintaining a logical, keyboard-navigable structure. We want every user to have a seamless experience when interacting with Six Point Logistics online.",
            "Accessibility is an ongoing journey, and we value the input of our community. If you experience any difficulty accessing our services or have suggestions for how we can improve our digital accessibility, please reach out to us. We are committed to making Six Point Logistics the most accessible and reliable logistics hub in the tri-state area."
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
