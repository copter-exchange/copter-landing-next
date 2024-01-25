import "../globals.css";
import type { Metadata } from "next";
import { PrivacySection } from "@/components/PrivacySection";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Servicio de pagos y cobros hechos a la medida de tus necesidades.",
};

export default function RiskPolicyPage() {
  return (
    <>
      <section className="padding bg-gradient-to-r from-copter-blue-dark to-copter-blue-light">
        <PrivacySection />
      </section>
    </>
  );
}