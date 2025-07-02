"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Badge, CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            {/* LEFT SIDE */}
            <div className="md:w-1/2">
              <div className="mb-6 space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Quality Diesel & Kerosene
                  <span className="text-blue-600"> Supply</span>
                </h1>
                <p className="text-muted-foreground text-base">
                  Reliable fuel distribution for industrial, commercial, and
                  residential needs. Premium quality diesel and kerosene with
                  fast delivery across the region.
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Quote
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  24/7 Delivery
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Quality Guaranteed
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Competitive Prices
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative  overflow-hidden rounded-xl aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/home.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/home.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
