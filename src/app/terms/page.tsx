import "../globals.css";
import type { Metadata } from "next";
import TermsSection from "@/components/TermsSection";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Servicio de pagos y cobros hechos a la medida de tus necesidades.",
};

export default function TermsPage() {
  return (
    <>
      <section className="padding bg-gradient-to-r from-copter-blue-dark to-copter-blue-light">
        <TermsSection />
      </section>
    </>
  );
}
