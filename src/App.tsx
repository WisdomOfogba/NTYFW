import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Form from "./components/Form";
import Img1 from "./assets/img1.jpg"
import Img2 from "./assets/img2.jpg"
import Img3 from "./assets/img3.jpg"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-60 h-screen"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Not Too Young For Wealth 3.0
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering teenagers with financial intelligence for a brighter
            future.
          </p>
          <Button
            label="Buy now"
            onClick={() => alert("Redirecting to purchase page...")}
          />
        </div>
      </section>

      {/* Program Highlights */}
      <section id="highlights" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Intelligence Test",
                description:
                  "Discover your financial strengths and areas for improvement.",
                image: Img1, // Replace with actual image
              },
              {
                title: "The Entrepreneurship Mindset",
                description:
                  "Learn the key traits of successful entrepreneurs.",
                image: Img2, // Replace with actual image
              },
              {
                title: "Career vs. Entrepreneurship",
                description:
                  "Understand the benefits of both paths to make informed decisions.",
                image: Img3, // Replace with actual image
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Course? */}
      <section id="why-choose" className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
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
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="form" className="py-16 px-4 bg-blue-700 text-white">
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
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">FAQs</h2>
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
              <div
                key={index}
                className="text-left bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-blue-700 py-12 text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Get Started Now!
        </h2>
        <p className="text-lg text-center mb-6">
          Enroll today to begin your journey toward financial intelligence and
          wealth. It's time to take control of your future!
        </p>
        <Button
            label="Buy now"
            onClick={() => alert("Redirecting to purchase page...")}
          />
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400 text-center">
        <p>© 2024 NTYFW. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
