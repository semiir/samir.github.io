import React from 'react';

interface ListSectionProps {
  title: string;
  items: string[];
}

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => {
  return (
    <div className="text-slate-500">
      <h2 className="font-extrabold my-3">{title}</h2>
      <ul className="list-disc ml-4">
        {items.map((content, contentIndex) => (
          <li className="my-1" key={contentIndex}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;