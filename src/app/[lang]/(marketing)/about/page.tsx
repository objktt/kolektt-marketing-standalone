"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { MinimalistHero, MinimalistHeroRight, ShapeConnectAnimation, ShapeConnectAnimation01, ShapeConnectAnimation02 } from "@/components/ui";
import type { Locale } from "@/config/i18n-config";

export default function AboutPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = React.use(params);
  
  // Translation texts
  const translations = {
    en: {
      heroMain: "In a world increasingly shaped by AI, we seek to restore balance. Technology should not only accelerate speed but also deepen meaning, and we design to bring humanity back to the forefront.",
      philosophyDesc1: "Today, algorithms and automation define much of our lives. But in this process, meaning and human connection are often lost.",
      philosophyDesc2: "At Objktt Studio, we believe technology should amplify humanity, not replace it. We don't just solve problems — we peel away layers of complexity, returning to the essence of each subject and creating solutions that feel natural, human, and enduring over time.",
      whyTMain: 'The final "t" in Kolektt and Objktt represents time. It signifies that what we create is not a fixed object, but a subject that unfolds and evolves across moments. Kolektt reflects how a collector\'s taste grows over time, while Objktt represents a studio that approaches every problem with awareness of time and context.',
      visionDesc1: "Taste is personal. Humanity is universal. And Beyond is where new possibilities emerge.",
      visionDesc2: "We stand at the intersection of these three elements — creating experiences that honor individual taste, nurture human connection, and evolve gracefully as they move forward. From there, we venture beyond.",
      ecosystemDesc: "The philosophy of Objktt Studio comes to life through Kolektt, a platform designed to grow and change naturally over time.",
      kolekttAppDesc: "Catalog, share, and explore vinyl collections as they evolve and expand.",
      bpmCollectDesc: "Analyze BPM, map energy and duration, and design performances that connect music with experience.",
      kolekttHubDesc: "Manage inventory, sales, and customer relationships with lifecycle-aware tools.",
      aboutStudioDesc1: "Objktt Studio is a collective of designers, developers, and music lovers dedicated to solving problems by returning to their essence, while pacing every solution with sensitivity to context and growth.",
      aboutStudioDesc2: "We merge design, technology, and music to create products that are functional, soulful, and lasting. Rather than chasing fleeting trends or blind automation, we focus on what makes us human — taste, emotion, and connection — allowing these qualities to deepen and evolve over time.",
      joinTeamDesc: "We're looking for passionate individuals who share our vision of creating meaningful products that bridge music, technology, and humanity.",
      learnMore: "Learn More",
      exploreKolektt: "Explore Kolektt",
      forIndividual: "For individual collectors",
      forDJs: "For DJs and vinyl enthusiasts",
      forStoreOwners: "For record store owners",
    },
    ko: {
      heroMain: "AI가 점점 더 많은 영역을 정의하는 세상에서, 우리는 균형을 되찾고자 합니다. 기술은 단순히 속도를 높이는 것이 아니라 의미를 깊게 만들어야 하며, 우리는 인간성을 최전선으로 되돌리는 디자인을 추구합니다.",
      philosophyDesc1: "오늘날 알고리즘과 자동화가 우리 삶의 많은 부분을 정의합니다. 하지만 이 과정에서 의미와 인간적 연결은 종종 사라집니다.",
      philosophyDesc2: "Objktt Studio는 기술이 인간성을 대체하는 것이 아니라 증폭시켜야 한다고 믿습니다. 우리는 단순히 문제를 해결하는 것이 아니라 복잡성의 층을 벗겨내고 각 주제의 본질로 돌아가 자연스럽고 인간적이며 시간이 지나도 지속되는 솔루션을 만듭니다.",
      whyTMain: 'Kolektt와 Objktt의 마지막 "t"는 시간을 나타냅니다. 이는 우리가 만드는 것이 고정된 객체가 아니라 순간을 거쳐 펼쳐지고 진화하는 주체임을 의미합니다. Kolektt는 컬렉터의 취향이 시간에 따라 성장하는 모습을 반영하고, Objktt는 시간과 맥락을 인식하며 모든 문제를 위트있게 해결하는 주체입니다.',
      visionDesc1: "취향은 개인적이고, 인간성은 보편적이며, 그 너머는 새로운 가능성이 떠오르는 곳입니다.",
      visionDesc2: "우리는 이 세 가지 요소의 교차점에 서서 개인의 취향을 존중하고 인간적 연결을 키우며 앞으로 나아가면서 흥미롭게 진화하는 경험을 만듭니다. 그리고 그곳에서 우리는 아마도 미래로 나아갑니다.",
      ecosystemDesc: "Objktt Studio의 철학은 시간에 따라 자연스럽게 성장하고 변화하도록 설계된 플랫폼 Kolektt를 통해 구현됩니다.",
      kolekttAppDesc: "바이닐 컬렉션이 진화하고 확장되는 과정을 카탈로그화하고, 공유하고, 탐색합니다.",
      bpmCollectDesc: "BPM을 분석하고 에너지와 지속 시간을 매핑하여 음악과 경험을 연결하는 퍼포먼스를 설계합니다.",
      kolekttHubDesc: "라이프사이클을 인식하는 도구로 재고, 판매, 고객 관계를 관리합니다.",
      aboutStudioDesc1: "Objktt Studio는 디자이너, 개발자, 음악가들의 모여 문제를 가진 현재 본질을 해결하며, 컨텍스트와 그 진화에 대한 목적성을 가지고 모든 솔루션의 속도를 조절합니다.",
      aboutStudioDesc2: "우리는 디자인, 기술, 음악을 융합하여 기능적이고 영혼이 담긴 지속 가능한 제품을 만듭니다. 일시적인 트렌드나 맹목적인 오토메이션을 쫓기보다는 인간을 인간답게 만드는 것, 즉 취향, 감정, 연결에 집중하며 이러한 특성이 시간이 지남에 따라 깊어지고 진화시키려고 합니다.",
      joinTeamDesc: "음악, 기술, 인간성을 연결하는 의미 있는 제품을 만드는 우리의 비전을 공유하는 열정적인 분들을 찾고 있습니다.",
      learnMore: "자세히 보기",
      exploreKolektt: "Kolektt 둘러보기",
      forIndividual: "개인 수집가를 위한",
      forDJs: "DJ와 바이닐 애호가를 위한",
      forStoreOwners: "레코드 샵 운영자를 위한",
    },
  };
  
  const t = translations[lang] || translations.en;
  
  // Ecosystem section animation hooks
  const ecosystemRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ecosystemRef,
    offset: ["start end", "end start"]
  });
  const ecosystemImageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const ecosystemImageRotate = useTransform(scrollYProgress, [0, 1], [0, -60]);
  
  return (
    <div className="relative bg-black text-white">
      {/* MinimalistHero Section */}
      <div className="relative z-20 mb-40">
        <MinimalistHero
          mainText={t.heroMain}
          overlayText={{
            part1: "Between Taste,",
            part2: "Humanity, & Beyond",
          }}
          leftImage="/images/media/01.png"
          className="bg-black text-white"
        />
      </div>

      {/* Shape Connect Animation - connect_01 */}
      <div className="relative z-20">
        <ShapeConnectAnimation01 />
      </div>

      {/* Our Philosophy */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-white">
          Our Philosophy
        </h2>
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
            {t.philosophyDesc1}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            {t.philosophyDesc2}
          </p>
        </div>
      </section>

      {/* Why the "t" section */}
      <div className="relative z-20">
        <MinimalistHeroRight
          mainText={t.whyTMain}
          overlayText={{
            part1: 'Why the "t"',
            part2: "in Kolektt / Objktt",
          }}
          rightImage="/images/media/02.png"
          className="bg-black text-white"
        />
      </div>

      {/* Shape Connect Animation - connect_02 */}
      <div className="relative z-20">
        <ShapeConnectAnimation02 />
      </div>

      {/* Our Vision */}
      <section className="relative z-20 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Our Vision
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              {t.visionDesc1}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              {t.visionDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section 
        ref={ecosystemRef}
        className="relative z-20 bg-black py-32 lg:py-40 pb-48 lg:pb-56 overflow-hidden min-h-[800px]"
      >
        {/* Background Image */}
        <motion.div
          style={{
            y: ecosystemImageY,
            rotate: ecosystemImageRotate,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-4 top-4 z-10 w-[403px] h-[403px] md:w-[484px] md:h-[484px] lg:w-[605px] lg:h-[605px] xl:w-[806px] xl:h-[806px]"
        >
          <Image
            src="/images/media/03.png"
            alt="The Ecosystem"
            fill
            className="object-contain filter grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
            sizes="(max-width: 768px) 403px, (max-width: 1024px) 484px, (max-width: 1280px) 605px, 806px"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 text-white leading-tight">
              The Ecosystem
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.ecosystemDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Kolektt App Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Kolektt App
              </h3>
              <p className="text-blue-400 mb-4 font-medium text-sm uppercase tracking-wide">
                {t.forIndividual}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.kolekttAppDesc}
              </p>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
              >
                {t.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* BPM Collect Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                BPM Collect
              </h3>
              <p className="text-green-400 mb-4 font-medium text-sm uppercase tracking-wide">
                {t.forDJs}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.bpmCollectDesc}
              </p>
              <Link
                href={`/${lang}/bpm-collect`}
                className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors group"
              >
                {t.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* Kolektt Hub Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Kolektt Hub
              </h3>
              <p className="text-purple-400 mb-4 font-medium text-sm uppercase tracking-wide">
                {t.forStoreOwners}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.kolekttHubDesc}
              </p>
              <Link
                href={`/${lang}/hub`}
                className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors group"
              >
                {t.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shape Connect Animation - connect_03 */}
      <div className="relative z-20">
        <ShapeConnectAnimation />
      </div>

      {/* About Objktt Studio */}
      <section className="relative z-20 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            About Objktt Studio
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              {t.aboutStudioDesc1}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              {t.aboutStudioDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team - Recruiting */}
      <section className="relative z-20 bg-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              {t.joinTeamDesc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@kolektt.kr?subject=Job Application - Objktt Studio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200"
              >
                hello@kolektt.kr
              </a>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-200"
              >
                {t.exploreKolektt}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
