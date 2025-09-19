import React from "react";

type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps) => {
  return (
    <div className="flex justify-end text-gray-500 group-hover:/80 transition-all text-xs md:text-sm mb-3 md:mb-5">
      <time
        dateTime={date}
        className="flex justify-end text-gray-500 group-hover:/80 transition-all text-xs md:text-sm mb-3 md:mb-5"
      >
        {date}
      </time>
    </div>
  );
};
