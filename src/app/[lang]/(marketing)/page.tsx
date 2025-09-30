"use client";

import Link from "next/link";
import Script from "next/script";
import { use, useState } from "react";
import type { Locale } from "@/config/i18n-config";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import Testimonials from "@/components/ui/testimonials";
import KolekttPricing from "@/components/ui/kolektt-pricing";
import { CollectionBento } from "@/components/ui/collection-bento";
import { motion } from "framer-motion";
import {
  Camera,
  Robot,
  Lightning,
  Target,
  ChartBar,
  MapPin,
  CurrencyDollar,
  Trophy,
  Brain,
  Globe,
  Lock,
  CheckCircle,
  Money,
  Sparkle,
  CaretDown,
  CaretUp,
} from "phosphor-react";

export default function IndexPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = use(params);
  
  // State for accordion functionality
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  return (
    <>
      {/* Hero & Demo Container */}
      <div id="hero-demo-container" className="relative pt-20">

        {/* Hero Banner */}
        <div id="hero" className="px-[5%] z-10 relative">
          <div className="bg-transparent relative rounded-[40px] overflow-hidden min-h-[600px] flex items-center">
            <div
              id="hero-three"
              className="absolute inset-0 z-0 pointer-events-none"
              aria-hidden="true"
            ></div>

            {/* Particles Background */}
            {/* <div className="absolute inset-0 z-[1] pointer-events-none" style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Particles
                  particleColors={['#ffffff', '#ffffff']}
                  particleCount={200}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={100}
                  moveParticlesOnHover={true}
                  alphaParticles={false}
                  disableRotation={false}
                />
              </div> */}

            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-[2]">
              <div className="flex justify-center">
                <div className="w-full text-center">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-tight mb-6">
                    All your collections begin here.
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 mb-12">
                    Smart platform for analog collectors. Easily collect,
                    manage, and trade your collection with camera-based
                    automatic recognition, metadata collection, and investment
                    insights.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4">
                    <button
                      type="button"
                      className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg border-none min-w-[200px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 22.773 22.773"
                      >
                        <path
                          d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                          data-original="#000000"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Download on the
                        </p>
                        <span className="text-lg font-semibold text-white">
                          App Store
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg border-none min-w-[200px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#57cef3"
                          d="M7 3v58l33-29z"
                          data-original="#57cef3"
                        />
                        <path
                          fill="#fff200"
                          d="m36 32 8-10 15 10-15 10z"
                          data-original="#fff200"
                        />
                        <path
                          fill="#48ff48"
                          d="M36 32 7 3h4l34 20z"
                          data-original="#48ff48"
                        />
                        <path
                          fill="#ff6c58"
                          d="M36 32 7 61h4l34-20z"
                          data-original="#ff6c58"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Get it on
                        </p>
                        <span className="text-lg font-semibold text-white">
                          Google Play
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Snap Section */}
        <section className="px-[5%] mt-5">
          <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:pr-12">
                    <div className="mb-8">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4">
                        Snap
                      </h2>
                    </div>
                    <p className="text-2xl text-white mb-10">
                      Easy registration with album photography
                    </p>
                    <p className="text-xl text-white mb-10">
                      Simply take a photo of your album cover and let our AI do
                      the rest. Our advanced computer vision technology
                      instantly recognizes albums and automatically fills in all
                      the metadata.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/bpm_demo.mp4" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[10%]"
                          animate={{ y: [-8, 8, -8] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Camera
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                One-tap photo capture
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Simply point and shoot to start
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[25%]"
                          animate={{ y: [8, -8, 8] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Robot
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                AI-powered recognition
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Advanced ML identifies albums
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[40%]"
                          animate={{ y: [-6, 10, -6] }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightning
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Instant metadata retrieval
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Get all details in 2 seconds
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[55%]"
                          animate={{ y: [10, -6, 10] }}
                          transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Target
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                95%+ accuracy rate
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Industry-leading precision
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[10%]"
                          animate={{ y: [-10, 12, -10] }}
                          transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Camera
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                One-tap photo capture
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Simply point and shoot to start recognition
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[25%]"
                          animate={{ y: [12, -10, 12] }}
                          transition={{
                            duration: 3.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Robot
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                AI-powered recognition
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Advanced ML identifies any album instantly
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[40%]"
                          animate={{ y: [-8, 14, -8] }}
                          transition={{
                            duration: 4.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Lightning
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Instant metadata retrieval
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Get all details in under 2 seconds
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[55%]"
                          animate={{ y: [14, -8, 14] }}
                          transition={{
                            duration: 4.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Target
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                95%+ accuracy rate
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Industry-leading precision and reliability
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collect Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-transparent pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:order-last">
                  <div className="lg:pl-12">
                    <div className="mb-8">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-4">
                        Collect
                      </h2>
                    </div>
                    <p className="text-2xl text-gray-700 mb-10">
                      Systematic collection management
                    </p>
                    <p className="text-xl text-gray-600 mb-10">
                      Organize your collection like never before. Track
                      condition, rarity, market value, and personal notes.
                      Generate insights about your collecting patterns and
                      discover gaps in your collection.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:order-first">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/bpm_demo.mp4" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[10%]"
                          animate={{ y: [-9, 11, -9] }}
                          transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <ChartBar
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Advanced analytics dashboard
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Deep insights into trends
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[25%]"
                          animate={{ y: [11, -9, 11] }}
                          transition={{
                            duration: 3.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Real-time market valuations
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Live pricing updates
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[40%]"
                          animate={{ y: [-7, 13, -7] }}
                          transition={{
                            duration: 4.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Condition tracking system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Monitor wear and quality
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[55%]"
                          animate={{ y: [13, -7, 13] }}
                          transition={{
                            duration: 3.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Brain
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Smart collection insights
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              AI-powered recommendations
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[10%]"
                          animate={{ y: [-11, 13, -11] }}
                          transition={{
                            duration: 4.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <ChartBar
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Advanced analytics dashboard
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Deep insights into your collection trends
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[25%]"
                          animate={{ y: [13, -11, 13] }}
                          transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <CurrencyDollar
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Real-time market valuations
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Live pricing updates from global markets
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[40%]"
                          animate={{ y: [-9, 15, -9] }}
                          transition={{
                            duration: 4.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Trophy
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Condition tracking system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Monitor wear and quality over time
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[55%]"
                          animate={{ y: [15, -9, 15] }}
                          transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Brain
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Smart collection insights
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              AI-powered recommendations and gaps
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:pr-12">
                    <div className="mb-8">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4">
                        Trade
                      </h2>
                    </div>
                    <p className="text-2xl text-white mb-10">
                      Exchange with other collectors
                    </p>
                    <p className="text-xl text-white mb-10">
                      Connect with collectors worldwide through our secure
                      trading platform. Get fair market prices, verify
                      authenticity, and trade with confidence. Build your
                      network and discover rare finds.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/bpm_demo.mp4" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[10%]"
                          animate={{ y: [-10, 12, -10] }}
                          transition={{
                            duration: 4.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Globe
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Global collector network
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Connect with collectors worldwide
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[25%]"
                          animate={{ y: [12, -10, 12] }}
                          transition={{
                            duration: 3.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Lock
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Secure escrow system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Safe transactions with protection
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[40%]"
                          animate={{ y: [-8, 14, -8] }}
                          transition={{
                            duration: 4.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkle
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Authenticity verification
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Expert verification for items
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[55%]"
                          animate={{ y: [14, -8, 14] }}
                          transition={{
                            duration: 4.0,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Money
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Fair market pricing
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Transparent pricing based on data
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[10%]"
                          animate={{ y: [-12, 14, -12] }}
                          transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Globe
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Global collector network
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Connect with collectors worldwide
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[25%]"
                          animate={{ y: [14, -12, 14] }}
                          transition={{
                            duration: 3.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Lock
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Secure escrow system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Safe transactions with built-in protection
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[40%]"
                          animate={{ y: [-10, 16, -10] }}
                          transition={{
                            duration: 5.0,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <CheckCircle
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Authenticity verification
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Expert verification for genuine items
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[55%]"
                          animate={{ y: [16, -10, 16] }}
                          transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Money
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Fair market pricing
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Transparent pricing based on real data
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Smart Technology Section */}
      <div className="px-[5%] mt-20">
        <div className="bg-transparent pt-32 lg:pt-28 pb-32 lg:pb-28 rounded-[40px] overflow-hidden">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[600px]">
              <div className="w-full lg:w-1/2 lg:order-last">
                <div className="lg:ml-12 xl:pl-8 flex flex-col justify-center">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      Smart technology for analog collectors
                    </h2>
                  </div>

                  <div className="mb-10">
                    {/* Smart Recognition Engine Accordion */}
                    <div className="border-b border-gray-200 pb-6">
                      <button
                        className="w-full text-left py-4 hover:bg-gray-50 transition-colors flex items-center justify-between focus:outline-none rounded-lg"
                        onClick={() => toggleAccordion(0)}
                      >
                        <h3 className="font-semibold text-gray-800 text-xl">
                          Smart Recognition Engine
                        </h3>
                        {openAccordion === 0 ? (
                          <CaretUp size={24} className="text-gray-600" />
                        ) : (
                          <CaretDown size={24} className="text-gray-600" />
                        )}
                      </button>
                      {openAccordion === 0 && (
                        <div className="pb-4">
                          <p className="text-xl text-gray-700">
                            Computer vision and ML instantly identify album covers
                            via camera, automatically matching artist, release
                            year, tracklist, and pressing info with 95%+ accuracy,
                            including rare editions.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Metadata Collection System Accordion */}
                    <div className="border-b border-gray-200 pb-6">
                      <button
                        className="w-full text-left py-4 hover:bg-gray-50 transition-colors flex items-center justify-between focus:outline-none rounded-lg"
                        onClick={() => toggleAccordion(1)}
                      >
                        <h3 className="font-semibold text-gray-800 text-xl">
                          Metadata Collection System
                        </h3>
                        {openAccordion === 1 ? (
                          <CaretUp size={24} className="text-gray-600" />
                        ) : (
                          <CaretDown size={24} className="text-gray-600" />
                        )}
                      </button>
                      {openAccordion === 1 && (
                        <div className="pb-4">
                          <p className="text-xl text-gray-700">
                            Continuously collects record data through user
                            behaviors - registration, ratings, trading. Real-time
                            updates on condition, quality, rarity, and market
                            prices build the world's most accurate vinyl database.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* AI Investment Advisor Accordion */}
                    <div className="pb-6">
                      <button
                        className="w-full text-left py-4 hover:bg-gray-50 transition-colors flex items-center justify-between focus:outline-none rounded-lg"
                        onClick={() => toggleAccordion(2)}
                      >
                        <h3 className="font-semibold text-gray-800 text-xl">
                          AI Investment Advisor
                        </h3>
                        {openAccordion === 2 ? (
                          <CaretUp size={24} className="text-gray-600" />
                        ) : (
                          <CaretDown size={24} className="text-gray-600" />
                        )}
                      </button>
                      {openAccordion === 2 && (
                        <div className="pb-4">
                          <p className="text-xl text-gray-700">
                            Analyzes your collection patterns to recommend
                            investment-worthy records. Considers market trends,
                            price volatility, and rarity to grow asset value. Beta
                            users saw 23% collection value increase in 6 months.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                  >
                    Explore More <i className="ph ph-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:order-first">
                <div className="relative mt-16 lg:mt-0">
                  <div className="h-[500px] lg:h-[600px] bg-transparent rounded-lg flex items-center justify-center p-5">
                    <img
                      src="/images/assets/04_01.png"
                      alt="Smart Technology Analytics"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Ecosystem Section */}
      <div className="px-[5%] relative z-10 mt-36 lg:mt-20">
        <div className="bg-black rounded-[40px] py-20 lg:py-24">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full xl:w-2/3 lg:w-5/6">
                <div className="text-center mb-20 lg:mb-10">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                      Complete your collection ecosystem
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <CollectionBento />
            </div>
          </div>
        </div>
      </div>

      {/* New Animated Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <div className="px-[5%] relative z-10 mt-36 xl:mt-32 lg:mt-20">
        <div className="bg-black rounded-[40px] py-12 lg:py-16">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <KolekttPricing />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <section className="px-[5%] mt-20">
        <div className="bg-transparent text-center pt-40 lg:pt-48 pb-40 lg:pb-48 rounded-[40px] overflow-hidden relative">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="relative z-10">
              <div className="flex justify-center">
                <div className="w-full lg:w-5/6">
                  <div className="mb-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                      700k+ Customers have Kolektt. Try it Now!
                    </h2>
                    <p className="text-2xl text-gray-700 mb-12 opacity-80">
                      Join hundreds of thousands of collectors who trust Kolektt
                      to manage, organize, and trade their vinyl collections.
                      Download now and discover why we're the #1 choice for
                      record collectors worldwide.
                    </p>
                  </div>

                  {/* Download Statistics */}
                  <div className="grid md:grid-cols-3 gap-4 mb-16 lg:mb-10">
                    <div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          700k+
                        </h3>
                        <p className="text-gray-700 mb-0 opacity-80">
                          Active Users
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          50M+
                        </h3>
                        <p className="text-gray-700 mb-0 opacity-80">
                          Albums Cataloged
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          4.9★
                        </h3>
                        <p className="text-gray-700 mb-0 opacity-80">
                          App Store Rating
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <button
                      type="button"
                      className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg border-none min-w-[200px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 22.773 22.773"
                      >
                        <path
                          d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                          data-original="#000000"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Download on the
                        </p>
                        <span className="text-lg font-semibold text-white">
                          App Store
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg border-none min-w-[200px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#57cef3"
                          d="M7 3v58l33-29z"
                          data-original="#57cef3"
                        />
                        <path
                          fill="#fff200"
                          d="m36 32 8-10 15 10-15 10z"
                          data-original="#fff200"
                        />
                        <path
                          fill="#48ff48"
                          d="M36 32 7 3h4l34 20z"
                          data-original="#48ff48"
                        />
                        <path
                          fill="#ff6c58"
                          d="M36 32 7 61h4l34-20z"
                          data-original="#ff6c58"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Get it on
                        </p>
                        <span className="text-lg font-semibold text-white">
                          Google Play
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Page-specific scripts for home page */}
      <Script
        src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
