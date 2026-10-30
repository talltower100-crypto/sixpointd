import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Phone, Menu, Box } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:px-20 md:py-4 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <a href="/" className="flex items-center gap-3 drop-shadow-md hover:opacity-90 transition-opacity" aria-label="Six Point Logistics Home">
        <Box className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} aria-hidden="true" />
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black leading-none text-white tracking-wider">SIX POINT</span>
          <span className="text-xs md:text-sm font-bold leading-none text-white/80 tracking-[0.2em] mt-1">LOGISTICS</span>
        </div>
      </a>

      <div className="hidden md:flex items-center bg-black/20 backdrop-blur-md rounded-none border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-1.5 pl-8">
        <nav className="flex items-center space-x-8 text-sm font-medium text-white mr-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-white/70 transition-colors drop-shadow-sm outline-none">
              About <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/90 text-white border-white/10 backdrop-blur-xl rounded-none w-48">
              <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/about">About Us</a></DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/case-studies">Case Studies</a></DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/blog">Blog</a></DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/areas-served">Areas Served</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-white/70 transition-colors drop-shadow-sm outline-none">
              Services <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/90 text-white border-white/10 backdrop-blur-xl rounded-none w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-white/50 text-xs uppercase tracking-wider">Logistics & Courier</DropdownMenuLabel>
                <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/services/port-drayage">Port Drayage (TWIC)</a></DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/services/medical-courier">Medical Courier</a></DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-white/50 text-xs uppercase tracking-wider">Compliance</DropdownMenuLabel>
                <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"><a href="/services/notary">Mobile Notary & Apostille</a></DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/contact" className="hover:text-white/70 transition-colors drop-shadow-sm">Contact</a>
        </nav>

        <a href="tel:9173023111" aria-label="Call Now: 917-302-3111">
          <Button className="rounded-none bg-white text-primary hover:bg-gray-100 px-6 h-10 font-medium shadow-lg">
            Call Now <Phone className="ml-2 w-4 h-4" aria-hidden="true" />
          </Button>
        </a>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden text-white p-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" aria-label="Open mobile menu" aria-expanded={isOpen}>
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-primary border-white/10 text-white w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about" className="border-b-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-3">About</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-4 pb-2">
                    <a href="/about" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>About Us</a>
                    <a href="/case-studies" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Case Studies</a>
                    <a href="/blog" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Blog</a>
                    <a href="/areas-served" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Areas Served</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="services" className="border-b-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-3">Services</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-4 pb-2">
                    <a href="/services/port-drayage" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Port Drayage (TWIC)</a>
                    <a href="/services/medical-courier" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Medical Courier</a>
                    <a href="/services/notary" className="text-base text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Mobile Notary & Apostille</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <a href="/contact" className="text-lg font-medium hover:text-white/70 py-2" onClick={() => setIsOpen(false)}>Contact</a>
            
            <a href="tel:9173023111" className="mt-4" onClick={() => setIsOpen(false)} aria-label="Call Now: 917-302-3111">
              <Button className="w-full rounded-none bg-white text-primary hover:bg-gray-100 h-12 font-medium">
                Call Now <Phone className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}