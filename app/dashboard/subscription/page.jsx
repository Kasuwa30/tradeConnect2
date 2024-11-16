"use client";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import Image from "next/image";
import React, { useState } from "react";
function Page() {
  const commonFeatures = [
    "14 Days Trial",
    "Access to Basic Vendor List",
    "Limited Messaging Per Day",
    "Limited Vendor Engagements",
    "Access to Vendors Rating and Reviews",
  ];

  const plans = [
    {
      type: "monthly",
      options: [
        {
          title: "Free Plan",
          price: 0,
          featureDescription: "Basic features included in the free plan.",
          features: [...commonFeatures],
        },
        {
          title: "Standard Plan",
          price: 10,
          featureDescription: "Everything in the free plan plus additional standard features.",
          features: [...commonFeatures, "Priority Support", "Enhanced Vendor Search"],
        },
        {
          title: "Premium Plan",
          price: 20,
          featureDescription: "Everything in the standard plan plus all premium features.",
          features: [...commonFeatures, "Unlimited Messaging", "Advanced Vendor Analytics"],
        },
      ],
    },
    {
      type: "annually",
      options: [
        {
          title: "Free Plan",
          price: 0,
          featureDescription: "Basic features included in the free plan.",
          features: [...commonFeatures],
        },
        {
          title: "Standard Plan",
          price: 100, // Annual price for standard plan
          featureDescription: "Everything in the free plan plus additional standard features.",
          features: [...commonFeatures, "Priority Support", "Enhanced Vendor Search"],
        },
        {
          title: "Premium Plan",
          price: 200, // Annual price for premium plan
          featureDescription: "Everything in the standard plan plus all premium features.",
          features: [...commonFeatures, "Unlimited Messaging", "Advanced Vendor Analytics"],
        },
      ],
    },
  ];
  const [selectedType, setSelectedType] = useState("monthly");
  const selectedPlan = plans.find(plan => plan.type === selectedType);
  return (
    <DashboardLayout>
      <div className="py-10">
        <h1 className="text-center font-medium text-xl text-black">
          We have got the <span className="text-[#992B1C]">Perfect</span> Plan for you!
        </h1>
        {/* Toggle buttons */}
        <div className="flex gap-4 mb-6 my-7">
          <button
            onClick={() => setSelectedType("monthly")}
            className={`p-2 ${
              selectedType === "monthly" ? "bg-[#992B1C] text-white hover:bg-red-700" : "bg-gray-200 text-black"
            } rounded-md `}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedType("annually")}
            className={`p-2 ${
              selectedType === "annually" ? "bg-[#992B1C] text-white hover:bg-red-700" : "bg-gray-200 text-black"
            } rounded-md `}
          >
            Annually
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {selectedPlan.options.map((option, index) => (
            <div className="border p-4 rounded-md" key={index}>
              {/* Plan Title */}
              <div>
                <p className="font-semibold">{option.title}</p>
              </div>

              {/* Price */}
              <div className="text-lg font-bold my-2">
                <p>
                  ${option.price} <span className="text-sm font-normal">Per {selectedType === "monthly" ? "Month" : "Year"}</span>
                </p>
              </div>

              {/* Feature Description */}
              <div>
                <p className="font-semibold">Features</p>
                <p>{option.featureDescription}</p>
              </div>

              {/* Features List */}
              <div className="mt-4">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 mb-2">
                    <Image src="/images/grommet-icons_status-good.svg" alt="feature icon" width={24} height={24} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              {/* Get Started Button */}
              <div className="flex bg-[#992B1C] p-3 rounded-md mt-4 cursor-pointer w-max hover:bg-red-700">
                <button onClick={() => alert(`Subscription successful on ${option.title}`)}>
                  <p className="text-white text-center w-full">Get Started</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Page;
