import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-10 lg:px-16 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary" aria-label="Six Point Logistics Home">
          SIX POINT LOGISTICS
        </Link>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-foreground/60">
          <Link to="/services/port-drayage" className="hover:text-primary transition-colors">Port Drayage</Link>
          <Link to="/services/medical-courier" className="hover:text-primary transition-colors">Medical Courier</Link>
          <Link to="/services/notary" className="hover:text-primary transition-colors">Notary & Apostille</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="text-sm text-foreground/40 flex flex-col items-center md:items-end gap-2 text-center md:text-right mt-4 md:mt-0">
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-1">
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-foreground transition-colors">Digital Accessibility</Link>
          </div>
          <span>© {new Date().getFullYear()} Six Point Logistics. All rights reserved.</span>
          <span className="text-xs">We are a document processing and apostille facilitation service. We do not provide legal advice.</span>
          <span className="text-xs mt-1">
            Website by <a href="https://sowaagency.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-2">Sowa Marketing Agency LLC</a>
          </span>
        </div>
      </div>
    </footer>
  );
}