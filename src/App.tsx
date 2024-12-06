import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Form from "./components/Form";
import Img4 from "./assets/img4.jpg";
import TrustedBySection from "./components/TrustedBySection";
import ParallaxCards from "./components/Paralex";
import Accordion from "./components/Accordion";

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="mb-32">
        <div className="relative bg-blue-950 w-full rounded-b-[70px] h-[600px] md:h-[720px]">
          <div className="text-white text-center max-w-7xl px-8 lg:px-20 mx-auto">
            <Navbar />
            <div className="flex flex-col">
              <div className="max-w-4xl mx-auto py-10 md:py-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Not Too Young For Wealth 3.0
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Empowering teenagers with financial intelligence for a
                  brighter future.
                </p>
                <Button
                  label="Buy the course"
                  onClick={() => alert("Redirecting to purchase page...")}
                />
              </div>
              <img
                src={Img4}
                alt=""
                className="relative rounded-3xl object-cover h-[300px] md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      <TrustedBySection />
      <ParallaxCards />

      {/* Why Choose This Course? */}
      <section id="why-choose" className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">
            Why Choose NTYFW 3.0?
          </h2>
          <p className="text-lg mb-6">
            This program is designed to build essential financial skills and an
            entrepreneurial mindset that will set you up for success, no matter
            which career path you choose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Content",
                description: "Engaging lessons.",
              },
              {
                title: "Real-World Applications",
                description: "Practical learning.",
              },
              {
                title: "Expert Trainers",
                description: "Industry leaders teaching.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
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

      {/* Lead Generation Form */}
      <section id="form" className="py-16 px-8 md:px-20 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Exclusive Updates and Offers
          </h2>
          <p className="text-lg mb-8">
            Sign up today and be the first to receive special offers, updates,
            and more!
          </p>
          <Form />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">FAQs</h2>
          <div className="space-y-6">
            {[
              {
                question: "How long is the course?",
                answer:
                  "The course is a series of video modules that you can watch at your own pace.",
              },
              {
                question: "Is there any certification?",
                answer:
                  "Yes, you'll receive a certification upon completing the course.",
              },
              {
                question: "Who can take this course?",
                answer:
                  "Anyone interested in building their financial intelligence, especially teenagers and young adults.",
              },
            ].map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                isOpen={activeIndex === index}
                onToggle={() => handleToggle(index)}
              >
                <div>{faq.answer}</div>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-blue-950 py-12 px-8 md:px-20 text-white">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Get Started Now!
          </h2>
          <p className="text-lg text-center mb-6">
            Enroll today to begin your journey toward financial intelligence and
            wealth. It's time to take control of your future!
          </p>
          <Button
            label="Let's get started"
            onClick={() => alert("Redirecting to purchase page...")}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-blue-950 text-center">
        <p>© 2024 NTYFW. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
