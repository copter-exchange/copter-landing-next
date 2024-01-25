import RiskSection from "@/components/RiskSection";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de riesgo",
  description:
    "Servicio de pagos y cobros hechos a la medida de tus necesidades.",
};

export default function RiskPolicyPage() {
  return (
    <>
      <section className="padding bg-gradient-to-r from-copter-blue-dark to-copter-blue-light">
        <RiskSection />
      </section>
    </>
  );
}
