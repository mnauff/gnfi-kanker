"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Card = ({
  children,
  imageUrl,
  delay,
}: {
  children: React.ReactNode;
  imageUrl: string;
  delay: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControl = useAnimation();
  const slideControl = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView, mainControl, slideControl]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 + delay }}
        className="relative h-[25rem] w-80 overflow-hidden rounded-lg bg-white shadow-lg md:h-[30rem]"
      >
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt=""
          className="h-auto w-full"
        />
        <div className="relative z-50 flex flex-col items-center p-6 text-[#711DB0]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const CardTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="relative text-2xl font-bold uppercase after:absolute after:-bottom-2.5 after:left-1/4 after:h-[2px] after:w-1/2 after:bg-[#711DB0]">
      {title}
    </h1>
  );
};
const CardDesc = ({ desc }: { desc: string }) => {
  return <p className="pt-5 text-center">{desc}</p>;
};

export { Card, CardTitle, CardDesc };
