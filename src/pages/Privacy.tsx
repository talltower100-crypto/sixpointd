import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

export default function Privacy() {
  return (
    <div className="font-sans bg-white text-black min-h-screen selection:bg-black/10">
      <SEOHead 
        title="Privacy Policy | Six Point Logistics"
        description="Privacy Policy for Six Point Logistics."
        canonical="https://6pointlogistics.com/privacy"
      />
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Privacy Policy</h1>
          <div className="text-lg text-black/70 mt-2">Last updated: {new Date().toLocaleDateString()}</div>
          
          <div className="prose prose-lg prose-black max-w-none mt-8">
            <p>At Six Point Logistics, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To deliver targeted advertising to you.</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us or contact us by post at our Brooklyn office.</p>
          </div>
        </motion.div>
        <SEOContentBlock 
          title="Safeguarding Your Data and Operations"
          paragraphs={[
            "In the modern logistics industry, data security is just as critical as physical security. At Six Point Logistics, we manage highly sensitive information daily, from proprietary supply chain routes and port drayage schedules to confidential legal documents requiring notarization and apostille processing. We are fully committed to protecting your privacy and ensuring that your data remains secure at all times.",
            "Our Privacy Policy reflects our stringent operational standards. Just as our TWIC-certified drivers maintain strict security protocols at NY and NJ ports, our digital infrastructure is designed to safeguard your personal and corporate information against unauthorized access. We only collect the data necessary to facilitate your logistics and compliance services, and we never sell your information to third parties.",
            "For our medical courier clients, privacy is paramount. We adhere to all relevant HIPAA regulations and maintain rigorous chain-of-custody documentation to ensure the confidentiality and integrity of all medical shipments, lab samples, and pharmaceuticals transported across Connecticut, New York, and New Jersey.",
            "We believe in complete transparency regarding how your data is used. Whether you are submitting a contact form for a drayage quote or utilizing our mobile notary services, you can trust that Six Point Logistics handles your information with the highest level of professionalism and care. If you have any questions about our privacy practices, please do not hesitate to contact our team."
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
