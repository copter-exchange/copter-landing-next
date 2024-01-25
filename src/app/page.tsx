import { CurrencySection } from "@/components/CurrencySection"
import DollarizeSection from "@/components/DollarizeSection"
import HelpSection from "@/components/HelpSection"
import HeroSection from "@/components/HeroSection"
import OTCSection from "@/components/OTCSection"
import ServicesSection from "@/components/ServicesSection"

export default function HomePage() {
  return (
    <>
      <div className="padding bg-gradient-to-r from-copter-blue-dark to-copter-blue-light">
        <HeroSection />
      </div>
      <section id="otc" className="padding bg-copter-gray-service">
        <CurrencySection />
      </section>
      <div className="padding bg-copter-gray-service">
        <ServicesSection />
      </div>
      <div className="padding bg-copter-gray-help">
        <HelpSection />
      </div>
      <div className="padding bg-copter-gray-otc">
        <OTCSection />
      </div>
      <section id="contacto" className="padding">
        <DollarizeSection />
      </section>
    </>
  )
}
