import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg ${bgColor} text-gray-400 border shadow-md`}>
      <div className="flex items-center">
        <div className="p-3 bg-blue-100 rounded-full">{icon}</div>
        <div className="ml-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-2xl font-bold"> {value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
