import React from "react";
import District from "../assets/district.png";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "District IV", logo: District },
];

const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-950">Trusted By</h2>
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center items-center gap-2">
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 object-contain"
              />
              <p className="text-lg font-semibold">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
