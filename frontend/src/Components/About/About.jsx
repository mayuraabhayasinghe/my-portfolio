import React from "react";
import { AboutSectionData } from "../../data";

const About = () => {
  return (
    <div id="about" className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center mb-10 font-bold text-white">
          About Me
        </h2>

        <div className="grid justify-items-center align-items-center gap-12">
          <div className="space-y-6 max-w-3xl">
            {AboutSectionData.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-400 text-center leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6 max-w-3xl">
            <div className="flex justify-center flex-wrap gap-3">
              {AboutSectionData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
