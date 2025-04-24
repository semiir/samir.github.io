import React from 'react';
import ListSection from "@/app/util/ListSection";

interface EducationExperienceItemProps {
  item: {
    school?: string;
    company?: string;
    date: string;
    degree?: string;
    major?: string;
    jobtitle?: string;
    Responsibilities?: string[];
    Accomplishments?: string[];
  };
}

const EducationExperienceItem: React.FC<EducationExperienceItemProps> = ({ item }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
        {item.school || item.company}
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-40 sm:w-20 px-5 py-3 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-lg">
          {item.date}
        </time>
        <div className="flex flex-col">
          {item.degree && <div className="text-xl font-bold text-slate-900">{item.degree}</div>}
          {item.major && <div className="text-md font-bold text-slate-600">{item.major}</div>}
          {item.jobtitle && <div className="text-xl font-bold text-slate-900">{item.jobtitle}</div>}
        </div>
      </div>
      {item.Responsibilities && <ListSection title="Job Responsibilities" items={item.Responsibilities} />}
      {item.Accomplishments && <ListSection title="Accomplishments" items={item.Accomplishments} />}
    </div>
  );
};

export default EducationExperienceItem;