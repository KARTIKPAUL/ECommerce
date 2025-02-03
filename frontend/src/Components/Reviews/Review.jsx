import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export function Review() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Olivia P.",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      name: "Liam K.",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      name: "Samantha D.",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-center p-6">
      <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
      <div className="relative flex items-center justify-center">
        {/* Left Navigation Button */}
        <Button
          onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}
          className="absolute left-0 bg-gray-200 p-2 rounded-full"
        >
          <ChevronLeft />
        </Button>

        {/* Review Card */}
        <Card className="p-6 w-3/4 shadow-lg rounded-lg">
          <CardContent>
            <h3 className="font-semibold text-lg">{reviews[index].name} ✅</h3>
            <p className="text-gray-600 mt-2">{reviews[index].text}</p>
          </CardContent>
        </Card>

        {/* Right Navigation Button */}
        <Button
          onClick={() => setIndex((index + 1) % reviews.length)}
          className="absolute right-0 bg-gray-200 p-2 rounded-full"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
