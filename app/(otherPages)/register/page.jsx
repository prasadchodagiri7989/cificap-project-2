import Footer1 from "@/components/footers/Footer1";
import Header5 from "@/components/headers/Header5";
import Register from "@/components/othersPages/Register";
import React from "react";

export const metadata = {
  title: "Register || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header5/>
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Register</div>
        </div>
      </div>

      <Register />
      <Footer1 />
    </>
  );
}
