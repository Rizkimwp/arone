import React from "react";

interface ButtonProps {
  isAdd: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  bgColor?: string;
  icon: React.ReactNode;
}

const AddButton: React.FC<ButtonProps> = ({ isAdd, title, bgColor, icon }) => {
  return (
    <>
      <button
        onClick={() => isAdd(true)}
        className={`flex items-center ${bgColor} items-center justify-center rounded-xl bg-primary py-4 px-10 text-center font-medium text-yellow-50 hover:bg-opacity-90 lg:px-8 xl:px-10`}
      >
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </button>
    </>
  );
};

export default AddButton;
