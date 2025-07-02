import Feature from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro"
};

const FeaturePage = () => {
  return (
    <div className="pb-20 pt-40">
      <Feature />
    </div>
  );
};

export default FeaturePage;