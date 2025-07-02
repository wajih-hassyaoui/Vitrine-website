import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro"
};

const AboutPage = () => {
  return (
    <div className="pb-20 pt-40">
      <About />
    </div>
  );
};

export default AboutPage;