"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Registration complete with just album photography. My unorganized collection was sorted in just one day.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    name: "Hyunjun Yu",
    role: "Vinyl Collector, Seoul",
  },
  {
    text: "Market prices and grades are automatically attached, making it easy to time trades. During beta, I sold rare records at good prices.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Minji Park",
    role: "Record Dealer, Busan",
  },
  {
    text: "The AI recognition is incredibly accurate. It identified even obscure pressings I had trouble cataloging myself.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    name: "David Kim",
    role: "Jazz Enthusiast, Tokyo",
  },
  {
    text: "Smart technology for analog collectors - this perfectly describes BPM Collect. The future of vinyl collecting is here.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Music Producer, Hong Kong",
  },
  {
    text: "The community features help me discover rare finds and connect with collectors worldwide. It's more than just cataloging.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    name: "Alex Rodriguez",
    role: "Hip-Hop Collector, LA",
  },
  {
    text: "I've tried other apps, but none match BPM's accuracy and ease of use. The camera recognition is simply magical.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    name: "Emma Thompson",
    role: "Classical Music Lover, London",
  },
  {
    text: "The investment insights feature helped me identify undervalued records in my collection. Made some great discoveries!",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
    name: "Marcus Johnson",
    role: "Record Investor, NYC",
  },
  {
    text: "From chaos to order in minutes. BPM Collect transformed my 500+ record collection into a searchable, organized library.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    name: "Lisa Wang",
    role: "Music Teacher, Singapore",
  },
  {
    text: "The trading platform is secure and fair. I've made dozens of successful trades with collectors around the world.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    name: "Tomoko Sato",
    role: "Electronic Music Collector, Osaka",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-transparent my-20 relative text-black">
      <div className="container z-10 mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-center text-black">
            Amazing!
          </h2>
          <p className="text-center mt-5 opacity-75 text-uppercase text-black">
            BPM Collect Beta Feedback
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
