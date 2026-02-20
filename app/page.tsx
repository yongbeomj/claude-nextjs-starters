import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { ComponentShowcase } from '@/components/sections/component-showcase'
import { CtaSection } from '@/components/sections/cta-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ComponentShowcase />
      <CtaSection />
    </>
  )
}
