'use client';

import React, { useEffect, useState } from 'react';

export interface BannerData {
  _id: string;
  title?: string;
  desktopBanner?: string;
  tabletBanner?: string;
  mobileBanner?: string;
  isActive?: boolean;
}

export interface LandingBannerProps {
  bannerId?: string;
  className?: string;
  priority?: boolean;
}

export default function LandingBanner({
  bannerId = '6a97dadf21a331a8f5bded68',
  className = '',
  priority = true,
}: LandingBannerProps) {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchBanner() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.risingspaces.in/api/banners/${bannerId}`, {
          cache: 'no-store',
        });
        const json = await res.json();
        if (isMounted && json.success && json.data) {
          setBanner(json.data);
        }
      } catch (err) {
        console.error('Error loading banner:', err);
        if (isMounted) {
          // Graceful fallback banner if API fails
          setBanner({
            _id: bannerId,
            title: 'Codename Tathastu',
            desktopBanner: '/banner_laptop.png',
            tabletBanner: '/banner_tab.png',
            mobileBanner: '/banner_mobile.png',
            isActive: true,
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchBanner();

    return () => {
      isMounted = false;
    };
  }, [bannerId]);

  if (loading) {
    return (
      <div className={`relative w-full overflow-hidden bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse h-[550px] sm:h-[450px] md:h-[500px] lg:h-[700px] xl:h-[800px] ${className}`} />
    );
  }

  if (!banner || !banner.isActive) return null;

  const baseUrl = 'https://api.risingspaces.in';
  const getFullUrl = (url?: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // If it's a local public asset
    if (url.startsWith('/banner_')) {
      return url;
    }
    // For API paths like /uploads/...
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    return `${baseUrl}${cleanPath}`;
  };

  const desktopSrc = getFullUrl(banner.desktopBanner) || '/banner_laptop.png';
  const tabletSrc = getFullUrl(banner.tabletBanner) || desktopSrc;
  const mobileSrc = getFullUrl(banner.mobileBanner) || tabletSrc;

  return (
    <div className={`relative w-full overflow-hidden bg-gray-100 ${className}`}>
      {/* Smooth Shimmer placeholder until image finishes decoding & loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      <picture>
        {/* Mobile View: screen width <= 640px */}
        <source media="(max-width: 640px)" srcSet={mobileSrc} />
        {/* Tablet View: screen width <= 1024px */}
        <source media="(max-width: 1024px)" srcSet={tabletSrc} />
        {/* Desktop View: screen width > 1024px */}
        <img
          src={desktopSrc}
          alt={banner.title || 'Codename Tathastu Banner'}
          className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </picture>
    </div>
  );
}
