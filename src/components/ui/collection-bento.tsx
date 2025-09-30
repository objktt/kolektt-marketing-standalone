import { MusicIcon, Users2Icon } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import type { Locale } from "@/config/i18n-config";

const features = [
  {
    Icon: MusicIcon,
    name: "BPM Collect",
    description:
      "From record registration to management with camera-based automatic recognition.",
    href: "/bpm-collect",
    cta: "Go to BPM Collect",
    background: (
      <div className="absolute -right-10 -top-10 opacity-60">
        <div className="h-[300px] w-[300px] bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Users2Icon,
    name: "Kolektt Hub",
    description: "Community, trading, and insights all in one place.",
    href: "/hub",
    cta: "Go to Kolektt Hub",
    background: (
      <div className="absolute -right-10 -top-10 opacity-60">
        <div className="h-[300px] w-[300px] bg-gradient-to-br from-orange-400 to-red-600 rounded-full blur-3xl" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
];

interface CollectionBentoProps {
  lang: Locale;
}

function CollectionBento({ lang }: CollectionBentoProps) {
  return (
    <BentoGrid className="grid-cols-1 lg:grid-cols-2 auto-rows-[24rem]">
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          {...feature}
          href={`/${lang}${feature.href}`}
        />
      ))}
    </BentoGrid>
  );
}

export { CollectionBento };
