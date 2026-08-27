/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { StudioSection } from './components/StudioSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { TelegramModal } from './components/TelegramModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050e07] text-white flex flex-col items-center justify-between relative overflow-x-hidden selection:bg-[#22c55e] selection:text-black">
      {/* Background ambient neon glow gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top radial glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial from-[#22c55e]/15 via-transparent to-transparent blur-3xl opacity-80" />
        
        {/* Mid radial glow */}
        <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-[#16a34a]/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[45%] -right-32 w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-3xl opacity-60" />
        
        {/* Bottom radial glow */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#15803d]/10 rounded-full blur-3xl opacity-70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Sticky Top Scarcity Bar */}
        <TopBar initialCount={42} />

        {/* Page Inner Container */}
        <main className="w-full max-w-xl sm:max-w-2xl px-2 sm:px-4 flex flex-col gap-2">
          {/* Hero Section */}
          <HeroSection onCtaClick={handleOpenModal} />

          {/* Studio Operation Section */}
          <StudioSection />

          {/* Features Section */}
          <FeaturesSection onCtaClick={handleOpenModal} />

          {/* Testimonials Community Section */}
          <CommunitySection onCtaClick={handleOpenModal} />

          {/* Footer Section */}
          <Footer />
        </main>
      </div>

      {/* Real-time Dynamic Notification Toast */}
      <LiveNotificationToast />

      {/* Interactive Telegram Modal */}
      <TelegramModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

