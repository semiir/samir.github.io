"use client";

import MyHeader from "@/components/ui/header";
import Footer from "@/app/util/footer";
import { education, experience } from "@/app/items/cv";
import EducationExperienceItem from "@/app/util/EducationExperienceItem";

export default function AboutMe() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">
      <MyHeader />

      <h2 className="font-medium text-2xl text-gray-600 my-5 sm:mb-0">Work Experience</h2>

      <main className="relative flex flex-col justify-center bg-slate-50 overflow-hidden my-6 rounded-md">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 my-4">
          <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto">
              {experience.map((item, index) => (
                <EducationExperienceItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <h2 className="font-medium text-2xl text-gray-600 my-5 sm:mb-0">Education & Training</h2>

      <main className="relative flex flex-col justify-center bg-slate-50 overflow-hidden my-6 rounded-md">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 my-4">
          <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto">
              {education.map((item, index) => (
                <EducationExperienceItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>

    

      <Footer />
    </div>
  );
}