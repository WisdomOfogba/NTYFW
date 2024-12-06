import React from "react";
import Button from "./Button";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";

const ParallaxCards: React.FC = () => {
  return (
    <section id="highlights" className="py-16 px-8 md:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
          Program Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Entrepreneurship Mindset",
              description: "Learn the key traits of successful entrepreneurs.",
              image: Img2,
            },
            {
              title: "Financial Intelligence Test",
              description:
                "Discover your financial strengths and areas for improvement.",
              image: Img1,
            },
            {
              title: "Career vs. Entrepreneurship",
              description:
                "Understand the benefits of both paths to make informed decisions.",
              image: Img3,
            },
          ].map((item, index) => (
            <div
              style={{
                top: `100px`,
              }}
              key={index}
              className="bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow sticky"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          form={true}
          label="Buy the course"
          onClick={() => alert("Redirecting to purchase page...")}
        />
      </div>
    </section>
  );
};

export default ParallaxCards;
