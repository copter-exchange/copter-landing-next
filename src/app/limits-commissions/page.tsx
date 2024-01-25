import "../globals.css";
import type { Metadata } from "next";
import LimitCommissionsSection from "@/components/LimitCommissionsSection";

export const metadata: Metadata = {
  title: "Límites y comisiones",
  description:
    "Servicio de pagos y cobros hechos a la medida de tus necesidades.",
};

export default function LimitCommissionsPage() {
  return (
    <>
      <section className="padding bg-gradient-to-r from-copter-blue-dark to-copter-blue-light">
        <LimitCommissionsSection />
      </section>
    </>
  );
}
