import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

export default function Terms() {
  return (
    <div className="font-sans bg-white text-black min-h-screen selection:bg-black/10">
      <SEOHead 
        title="Terms of Service | Six Point Logistics CT/NY/NJ"
        description="Read the Terms of Service for Six Point Logistics. Understand our policies regarding secure port drayage, medical courier, and notary services."
        canonical="https://6pointlogistics.com/terms"
      />
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Terms of Service</h1>
          <div className="text-lg text-black/70 mt-2">Last updated: {new Date().toLocaleDateString()}</div>
          
          <div className="prose prose-lg prose-black max-w-none mt-8">
            <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Six Point Logistics ("Company", "we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Prohibited Activities</h2>
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Modifications and Interruptions</h2>
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.</p>
          </div>
        </motion.div>
        <SEOContentBlock 
          title="Our Commitment to Transparent Logistics Operations"
          paragraphs={[
            "At Six Point Logistics, we firmly believe that clear, transparent terms of service are the absolute foundation of any strong, lasting business partnership. We operate daily in high-stakes environments—from highly secure maritime ports in New York and New Jersey to sensitive medical facilities in Connecticut—and absolute clarity regarding our operational parameters, liabilities, and service commitments is essential for both our team and our valued clients.",
            "Our terms are specifically designed to protect the integrity of your supply chain and ensure total compliance with all local, state, and federal regulations governing freight transport, biohazard medical couriers, and legal notary services in CT, NY, and NJ. We require all clients to provide highly accurate shipment details to ensure that our TWIC-certified and Bloodborne Pathogen-certified drivers can execute their duties safely, legally, and without unnecessary delays at the gate.",
            "By utilizing our port drayage, medical courier, or mobile notary services, you are actively partnering with a logistics hub that prioritizes security, speed, and legal compliance above all else. We ask that our clients review these terms carefully, as they outline crucial, binding information regarding our payment policies (including our strict requirement for Stripe or Square processing prior to document submission), wait fees at congested ports, and our standard limitations of liability.",
            "We are fully committed to providing exceptional, uninterrupted service and maintaining open lines of communication at all times. If you have any specific questions regarding these Terms of Service or how they apply to your unique logistics or supply chain needs, our support team is readily available to assist you. Thank you for choosing Six Point Logistics as your trusted transportation and compliance partner."
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
