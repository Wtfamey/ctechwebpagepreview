import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Sidebar } from "@/components/site/Sidebar";
import { Footer } from "@/components/site/Footer";
import {
  UsSection,
  DesignConsultingSection,
  RdAdvisorySection,
  ProductsSection,
  JugnooLedLightsSection,
  EonElectricMobilitySection,
  ModularHousingSection,
  EnvironmentPublicDesignSection,
  CtechClubSection,
  CtechMartSection,
  PartnersSection,
  PeopleSection,
  CtechAcademySection,
  ContactSection,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CTech Labs — Innovation Development Company | LED Lights, Electric Mobility, Modular Housing" },
      { name: "description", content: "CTech Labs is a SINE IIT-Bombay promoted design, engineering and innovation-led development company. Specializing in LED lighting, electric mobility, modular housing, and product development." },
      { name: "keywords", content: "LED lights, solar lights, electric mobility, modular housing, innovation, IIT Bombay, SINE, product development, CTech Labs" },
      { property: "og:title", content: "CTech Labs — Innovation Development Company" },
      { property: "og:description", content: "Customising Technologies — Creating Value" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.ctechlab.com" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@ctechlab" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />
      <main className="pt-[236px] md:pt-[236px] lg:pt-[236px] max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8">
            <div id="section-us" className="section-wrapper"><UsSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-design-consulting" className="section-wrapper"><DesignConsultingSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-rd-advisory" className="section-wrapper"><RdAdvisorySection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-products" className="section-wrapper"><ProductsSection /></div>
            <div id="section-jugnoo-led-lights" className="section-wrapper"><JugnooLedLightsSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-eon-electric-mobility" className="section-wrapper"><EonElectricMobilitySection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-modular-housing" className="section-wrapper"><ModularHousingSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-environment-public-design" className="section-wrapper"><EnvironmentPublicDesignSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-ctech-club" className="section-wrapper"><CtechClubSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-ctech-mart" className="section-wrapper"><CtechMartSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-partners" className="section-wrapper"><PartnersSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-people" className="section-wrapper"><PeopleSection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-ctech-academy" className="section-wrapper"><CtechAcademySection /></div>
            <hr className="my-6 border-gray-200" />
            <div id="section-contact" className="section-wrapper"><ContactSection /></div>
          </div>
          <div className="w-full lg:w-[380px] flex-shrink-0 hidden lg:block">
            <div className="sticky top-[280px]">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

