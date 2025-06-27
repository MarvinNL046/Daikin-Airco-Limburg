import { HeroOptimized } from "@/components/sections/hero-optimized";
import { ServicesOptimized } from "@/components/sections/services-optimized";
import { WhyUs } from "@/components/sections/why-us";
import { Products } from "@/components/sections/products";
import { ServiceAreas } from "@/components/sections/service-areas";
import { CTABanner } from "@/components/sections/cta-banner";
import { ContactOptimized } from "@/components/sections/contact-optimized";
import { Benefits } from "@/components/sections/benefits";
import { Reviews } from "@/components/sections/reviews";
import { Timeline } from "@/components/sections/timeline";
import { FAQ } from "@/components/sections/faq";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <HeroOptimized />
      <ServicesOptimized />
      <Products />
      <WhyUs />
      <ServiceAreas />
      <Benefits />
      <Timeline />
      <Reviews />
      <CTABanner variant="default" />
      <FAQ />
      <ContactOptimized />
    </>
  );
}