"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    image: string;
    name: string;
    role: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border shadow-lg max-w-xs w-full"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1f2937",
                    border: "1px solid #e5e7eb",
                  }}
                  key={i}
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-4">
                    <img
                      width={32}
                      height={32}
                      src={image}
                      alt={name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-4 text-sm">
                        {name}
                      </div>
                      <div className="leading-4 opacity-60 tracking-tight text-xs">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
