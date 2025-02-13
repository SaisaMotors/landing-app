import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScheduleServiceSection from "@/components/ScheduleServiceSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import SocialLinks from "@/components/SocialLinks";
import TradeEnquirySection from "@/components/TradeEnquirySection";
import WhatsappButton from "@/components/WhatsappButton";
import { Analytics } from "@vercel/analytics/next";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <TradeEnquirySection />
      <ServiceHighlights />
      <ScheduleServiceSection />

      <SocialLinks />
      <WhatsappButton />
      <Footer />

      <Analytics />
    </>
  );
}
