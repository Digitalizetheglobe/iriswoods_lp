'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectOverview } from '@/components/sections/ProjectOverview';
import { WhySection } from '@/components/sections/WhySection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import LayoutSection from "@/components/sections/LayoutSection";
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { useModal } from '@/components/providers/ModalProvider';



export default function Home() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen font-sans">
      <Header onEnquireClick={openModal} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectOverview />
        <WhySection />
        <AmenitiesSection />
        <GallerySection />
        <LayoutSection />
        <LocationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
