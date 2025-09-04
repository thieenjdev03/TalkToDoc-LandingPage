import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import ServicePrice from "@/components/Home/ServicesPrice";
import Advices from "@/components/Home/AI_advices";
import { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import HealthcareServices from "@/components/Home/HealthServices";
config.autoAddCss = false
export const metadata: Metadata = {
  title: "TalkToDoc - Trang Người Dùng",
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <HealthcareServices/>
      <Advices/>
      <Gallery />
      <Cook />
      <Features />
      <Expert />
      <ServicePrice/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-..."
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </main>
  );
}
