import React from "react";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id}>
      <h2>
        <span></span>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

type SubSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const SubSection = ({ title, children }: SubSectionProps) => {
  return (
    <div className="mb-10 md:mb-14">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
