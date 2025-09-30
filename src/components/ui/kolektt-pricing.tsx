"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Plan = "monthly" | "annually";

type PLAN = {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  annuallyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
  link: string;
};

export const PLANS: PLAN[] = [
  {
    id: "collector",
    title: "Collector",
    desc: "Perfect for individual vinyl collectors who want to organize and track their collection with smart recognition technology.",
    monthlyPrice: 0,
    annuallyPrice: 0,
    buttonText: "Start Collecting",
    features: [
      "Smart album recognition via camera",
      "Basic collection management",
      "Up to 500 albums",
      "Community support",
      "Collection analytics",
      "Mobile app access",
    ],
    link: "#",
  },
  {
    id: "trader",
    title: "Trader",
    desc: "Designed for serious collectors and traders who want full access to our marketplace and advanced tools.",
    monthlyPrice: 9,
    annuallyPrice: 90,
    buttonText: "Start Trading",
    features: [
      "Everything in Collector plan",
      "Unlimited album collection",
      "Access to trading marketplace",
      "AI investment advisor",
      "Advanced pricing analytics",
      "Priority customer support",
      "Verified seller badge",
    ],
    link: "#",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    desc: "For record stores, distributors, and businesses who need advanced features, custom integrations, and dedicated support.",
    monthlyPrice: 29,
    annuallyPrice: 290,
    buttonText: "Contact Sales",
    features: [
      "Everything in Trader plan",
      "Custom API integrations",
      "White-label solutions",
      "Advanced analytics dashboard",
      "Dedicated account manager",
      "Custom branding options",
      "Priority technical support",
      "Volume discounts available",
    ],
    link: "#",
  },
];

export default function KolekttPricing() {
  const [billPlan, setBillPlan] = useState<Plan>("monthly");

  const handleSwitch = () => {
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-5xl py-12 mx-auto">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-base md:text-lg text-center text-gray-300 mt-6">
            Start for free and upgrade when you're ready to unlock the full
            power of vinyl collecting and trading.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-8">
          <span
            className={cn(
              "text-base font-medium",
              billPlan === "monthly" ? "text-white" : "text-gray-400",
            )}
          >
            Monthly
          </span>
          <button
            onClick={handleSwitch}
            className="relative rounded-full focus:outline-none"
          >
            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-blue-500"></div>
            <div
              className={cn(
                "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                billPlan === "annually" ? "translate-x-6" : "translate-x-0",
              )}
            />
          </button>
          <span
            className={cn(
              "text-base font-medium",
              billPlan === "annually" ? "text-white" : "text-gray-400",
            )}
          >
            Annually
            {billPlan === "annually" && (
              <span className="ml-2 text-sm text-green-400">(Save 17%)</span>
            )}
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 lg:pt-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan) => (
          <PricingPlan key={plan.id} plan={plan} billPlan={billPlan} />
        ))}
      </div>
    </div>
  );
}

const PricingPlan = ({ plan, billPlan }: { plan: PLAN; billPlan: Plan }) => {
  const price = billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice;

  return (
    <div className="flex flex-col relative rounded-2xl lg:rounded-3xl transition-all bg-white items-start w-full border border-gray-200">
      <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
        <h2 className="font-semibold text-xl text-gray-900 pt-5">
          {plan.title}
        </h2>
        <h3 className="mt-3 text-3xl font-bold md:text-5xl text-gray-900">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${plan.id}-${billPlan}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {price === 0 ? (
                "Free"
              ) : (
                <>
                  <span className="text-xl">$</span>
                  {price}
                  <span className="text-lg text-gray-500">
                    /{billPlan === "monthly" ? "mo" : "yr"}
                  </span>
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2">{plan.desc}</p>
      </div>

      <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
        <Button size="lg" className="w-full bg-black hover:bg-gray-800">
          {plan.buttonText}
        </Button>
        <div className="h-8 overflow-hidden w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.span
              key={billPlan}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-sm text-center text-gray-500 mt-3 mx-auto block"
            >
              {price === 0
                ? "No credit card required"
                : billPlan === "monthly"
                  ? "Billed monthly"
                  : "Billed annually"}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-start w-full p-4 md:p-8 pt-0 gap-y-3">
        <span className="text-base text-gray-900 font-semibold mb-2">
          What's included:
        </span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start justify-start gap-3">
            <div className="flex items-center justify-center mt-0.5">
              <CheckIcon className="size-5 text-green-500" />
            </div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
